import mongoose from "mongoose";

const digitalAssetSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true
		},

		name: {
			type: String,
			required: true,
			trim: true
		},

		purpose: {
			type: String,
			trim: true
		},

		category: {
			type: String,
			enum: ["email", "social_media", "banking", "crypto", "cloud_storage", "domain", "business", "subscription", "other"],
			required: true
		},

		importance: {
			type: String,
			enum: ["low", "medium", "high", "critical"],
			default: "medium"
		},

		provider: {
			type: String,
			trim: true
		},

		websiteUrl: {
			type: String,
			trim: true
		},

		username: {
			type: String,
			trim: true
		},

		encryptedInstructions: {
			type: String
		},

		encryptedRecoveryInfo: {
			type: String
		},

		recoveryMethod: {
			type: String,
			enum: ["none", "email", "phone", "recovery_code", "trusted_contact", "other"],
			default: "none"
		},

		backupEmail: {
			type: String,
			lowercase: true,
			trim: true
		},

		assignedContactIds: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "TrustedContact"
		}],

		status: {
			type: String,
			enum: ["active", "archived"],
			default: "active"
		}
	},
	{
		timestamps: true
	}
);

export const DigitalAsset = mongoose.model("DigitalAsset", digitalAssetSchema);
