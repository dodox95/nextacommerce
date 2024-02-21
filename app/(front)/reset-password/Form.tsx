// app/(front)/reset-password/Form.tsx
'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'

type ForgotPasswordInputs = {
  email: string;
}

const ForgotPasswordForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInputs>()

  const onSubmit = async (data: ForgotPasswordInputs) => {
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('There was an error sending the reset password email.');
      }

      // Show success message and possibly redirect
      toast.success('If the email is associated with an account, a password reset email will be sent.');
      // Optionally, redirect to the login page or a page that says 'Check your email'
    } catch (error: any) {
      toast.error(error.message || 'Failed to send reset password email.');
    }
  }

  return (
    <div className="max-w-sm mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Forgot Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-error">{errors.email.message}</p>}
          </div>
          <div className="my-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
        <div>
          Remembered your password?{' '}
          <Link href="/signin">
            <button className="link">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm