// app/api/auth/activate/[token].ts
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/lib/models/UserModel';

export const GET = async (request: NextRequest) => {
  const token = request.nextUrl.pathname.split('/').pop(); // Extract the token from the URL
  await dbConnect();

  // Find the user by the email token and update their isActive status
  const user = await UserModel.findOneAndUpdate(
    { emailToken: token },
    { isActive: true, emailToken: null },
    { new: true }
  );

  if (user) {
    // Redirect to the successful activation page
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/activate/successful',
        'Content-Type': 'application/json',
      },
    });
  } else {
    // Redirect to the error page
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/activate/error',
        'Content-Type': 'application/json',
      },
    });
  }
};
