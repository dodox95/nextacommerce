// lib/models/UserModel.ts
import mongoose from 'mongoose';

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  emailToken: string | null;
  isAdmin: boolean;
  emailResetPassword: string | null;  
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: false },
  emailToken: { type: String, default: null },
  isAdmin: { type: Boolean, required: true, default: false },
  emailResetPassword: { type: String, default: null }, 
}, { timestamps: true });

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
