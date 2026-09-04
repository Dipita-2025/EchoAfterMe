import mongoose from "mongoose";

const goodbyeLetterSchema = new mongoose.Schema(
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

		recipient: {
			type: String,
			trim: true
		},

		draftContent: {
			type: String
		},

		finalContent: {
			type: String
		},

		language: {
			type: String,
			default: "English",
			trim: true
		},

		aiChanges: [{
			type: {
				type: String,
				enum: ["grammar", "tone", "translation", "organization"]
			},
			createdAt: {
				type: Date,
				default: Date.now
			}
		}],

		status: {
			type: String,
			enum: ["draft", "approved", "archived"],
			default: "draft"
		},

		approvedAt: {
			type: Date,
			default: null
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

export const GoodbyeLetter = mongoose.model("GoodbyeLetter", goodbyeLetterSchema);
