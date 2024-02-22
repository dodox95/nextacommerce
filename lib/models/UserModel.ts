// lib/models/UserModel.ts
import mongoose, { Document, Model } from 'mongoose';

// TypeScript interface to define the User properties
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  emailToken: string | null;
  isAdmin: boolean;
  emailResetPassword: string | null;
  passwordResetTokenExpires: Date | null; // Field for token expiration
}

// Mongoose schema definition for the User
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: false },
  emailToken: { type: String, default: null },
  isAdmin: { type: Boolean, required: true, default: false },
  emailResetPassword: { type: String, default: null },
  passwordResetTokenExpires: { type: Date, default: null }, // Field for token expiration
}, { timestamps: true });

// Mongoose model creation
const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel;
