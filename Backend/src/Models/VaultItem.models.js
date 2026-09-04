import mongoose from "mongoose";

const vaultItemSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true
		},

		title: {
			type: String,
			required: true,
			trim: true
		},

		type: {
			type: String,
			enum: ["recovery_code", "document_reference", "insurance", "financial_note", "important_note", "other"],
			required: true
		},

		encryptedContent: {
			type: String,
			required: true
		},

		encryptionVersion: {
			type: Number,
			default: 1
		},

		assignedContactIds: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "TrustedContact"
		}]
	},
	{
		timestamps: true
	}
);

export const VaultItem = mongoose.model("VaultItem", vaultItemSchema);
