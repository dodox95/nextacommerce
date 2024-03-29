// app/api/auth/reset-password/route.ts
import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import UserModel from '@/lib/models/UserModel'
import { sendPasswordResetEmail } from '@/lib/mail'
import { v4 as uuidv4 } from 'uuid'

export const POST = async (request: NextRequest) => {
  await dbConnect();

  const { email } = await request.json();

  const user = await UserModel.findOne({ email });
  if (user) {
    // Generate a unique token for password reset
    const passwordResetToken = uuidv4();

    // Set the token to emailResetPassword field in the user document
    user.emailResetPassword = passwordResetToken;
    await user.save();

    // Send the password reset email with the token
    await sendPasswordResetEmail(email, passwordResetToken);

    return new Response(JSON.stringify({ message: 'A password reset link has been sent to your email.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    // Respond with a generic message whether or not the email was found
    // This is a security measure to prevent email enumeration
    return new Response(JSON.stringify({ message: 'If the email is associated with an account, a password reset link will be sent.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};


