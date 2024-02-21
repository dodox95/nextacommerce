// app/api/auth/forgot-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/lib/models/UserModel';
import { sendPasswordResetEmail } from '@/lib/mail';
import { v4 as uuidv4 } from 'uuid';

// Make sure to export the method as an uppercase named export
export async function POST(request: NextRequest) {
  await dbConnect();

  const { email } = await request.json();

  const user = await UserModel.findOne({ email });
  if (user) {
    const passwordResetToken = uuidv4();

    user.emailResetPassword = passwordResetToken;
    user.passwordResetTokenExpires = new Date(Date.now() + 3600000); // 1 hour from now
    await user.save();

    await sendPasswordResetEmail(email, passwordResetToken);

    return new Response(JSON.stringify({ message: 'A password reset link has been sent to your email.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'If the email is associated with an account, a password reset link will be sent.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Note: No default export is needed or used here.
