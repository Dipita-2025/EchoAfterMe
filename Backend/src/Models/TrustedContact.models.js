import mongoose from "mongoose";

const trustedContactSchema = new mongoose.Schema(
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

		email: {
			type: String,
			required: true,
			lowercase: true,
			trim: true
		},

		relationship: {
			type: String,
			required: true,
			trim: true
		},

		phone: {
			type: String,
			trim: true
		},

		permission: {
			type: String,
			enum: ["view_only", "receive_instructions", "view_assets", "full_legacy_access"],
			default: "view_only"
		},

		accessibleAssetIds: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "DigitalAsset"
		}],

		accessibleVaultItemIds: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "VaultItem"
		}],

		verificationTokenHash: {
			type: String,
			select: false
		},

		verifiedAt: {
			type: Date,
			default: null
		},

		status: {
			type: String,
			enum: ["pending", "verified", "revoked"],
			default: "pending"
		}
	},
	{
		timestamps: true
	}
);

export const TrustedContact = mongoose.model("TrustedContact", trustedContactSchema);
