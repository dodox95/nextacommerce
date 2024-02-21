// app/(front)/reset-password/page.tsx
import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Forgot Password',
}

export default async function Signin() {
  return <Form />
}
