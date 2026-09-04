import mongoose from "mongoose";

const memorySchema = new mongoose.Schema(
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

		description: {
			type: String,
			trim: true
		},

		mediaType: {
			type: String,
			enum: ["photo", "video", "audio", "document", "note"],
			required: true
		},

		mediaUrl: {
			type: String,
			trim: true
		},

		thumbnailUrl: {
			type: String,
			trim: true
		},

		storageProvider: {
			type: String,
			enum: ["local", "cloudinary"],
			default: "local"
		},

		capturedAt: {
			type: Date,
			default: null
		},

		tags: [{
			type: String,
			trim: true
		}],

		assignedContactIds: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "TrustedContact"
		}],

		visibility: {
			type: String,
			enum: ["private", "trusted_contacts", "emergency_card"],
			default: "private"
		}
	},
	{
		timestamps: true
	}
);

export const Memory = mongoose.model("Memory", memorySchema);
