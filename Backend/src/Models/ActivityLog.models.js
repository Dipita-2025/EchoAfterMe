import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true
		},

		action: {
			type: String,
			required: true,
			trim: true
		},

		entityType: {
			type: String,
			required: true,
			trim: true
		},

		entityId: {
			type: mongoose.Schema.Types.ObjectId,
			default: null
		},

		ipAddress: {
			type: String,
			trim: true
		},

		userAgent: {
			type: String,
			trim: true
		},

		metadata: {
			type: mongoose.Schema.Types.Mixed,
			default: {}
		}
	},
	{
		timestamps: true
	}
);

export const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);
