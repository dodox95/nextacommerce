// app/(front)/reset-password/[token]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/lib/models/UserModel';
import { sendNewPasswordEmail } from '@/lib/mail';
import { randomBytes } from 'crypto';

export async function get(request: NextRequest) {
  // Connect to the database
  await dbConnect();

  // Extract the token from the URL path
  const token = request.nextUrl.pathname.split('/').pop();

  // Find the user by the emailResetPassword token and check if the token has not expired
  const user = await UserModel.findOne({
    emailResetPassword: token,
    passwordResetTokenExpires: { $gt: new Date() },
  });

  if (!user) {
    // Handle the case where the token is invalid or has expired
    return new Response('Password reset token is invalid or has expired.', {
      status: 400,
    });
  }

  // Generate a new secure password
  const newPassword = generateSecurePassword();

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password, reset the emailResetPassword token and its expiry
  user.password = hashedPassword;
  user.emailResetPassword = null; // Clear the token after successful reset
  user.passwordResetTokenExpires = undefined; // Clear the expiry
  await user.save();

  // Send the new password to the user's email
  await sendNewPasswordEmail(user.email, newPassword);

  // Return a success response
  return new Response('Your new password has been sent to your email.', {
    status: 200,
  });
}

// Helper function to generate a secure password
function generateSecurePassword() {
  return randomBytes(12).toString('hex'); // Generates a random hex string of length 24
}

// Note: Do not use 'export default get;' since we are using named exports.
