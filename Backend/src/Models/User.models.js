import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      trim: true
    },
  email:{
    type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },

    avatarUrl: {
      type: String,
      default: null
    },

    status: {
      type: String,
      enum: ["active", "locked", "deactivated"],
      default: "active"
    },
    
    lastLoginAt: {
      type: Date,
      default: null
    },

    security: {
      mfaEnabled: {
        type: Boolean,
        default: false
      },

      encryptionKeyVersion: {
        type: Number,
        default: 1
      }
    }


},{timestamps:true});
export const User = mongoose.model("User", userSchema);