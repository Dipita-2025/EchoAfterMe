import mongoose from "mongoose";

const emergencyNoteSchema = new mongoose.Schema(
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

		category: {
			type: String,
			enum: ["insurance", "legal", "financial", "documents", "medical", "general"],
			required: true
		},

		encryptedContent: {
			type: String,
			required: true
		},

		assignedContactIds: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "TrustedContact"
		}],

		isVisibleOnEmergencyCard: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

export const EmergencyNote = mongoose.model("EmergencyNote", emergencyNoteSchema);
