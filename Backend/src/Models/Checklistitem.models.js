import mongoose from "mongoose";

const checklistItemSchema = new mongoose.Schema(
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

		category: {
			type: String,
			enum: ["assets", "security", "contacts", "documents", "subscriptions", "personal"],
			required: true
		},

		isSystemGenerated: {
			type: Boolean,
			default: false
		},

		completed: {
			type: Boolean,
			default: false
		},

		completedAt: {
			type: Date,
			default: null
		},

		dueDate: {
			type: Date,
			default: null
		},

		order: {
			type: Number,
			default: 0
		}
	},
	{
		timestamps: true
	}
);

export const ChecklistItem = mongoose.model("ChecklistItem", checklistItemSchema);
