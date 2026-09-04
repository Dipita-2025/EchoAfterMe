import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true
		},

		serviceName: {
			type: String,
			required: true,
			trim: true
		},

		category: {
			type: String,
			trim: true
		},

		amount: {
			type: Number,
			required: true,
			min: 0
		},

		currency: {
			type: String,
			default: "USD",
			uppercase: true,
			trim: true
		},

		billingCycle: {
			type: String,
			enum: ["weekly", "monthly", "quarterly", "yearly", "unknown"],
			default: "monthly"
		},

		nextBillingDate: {
			type: Date,
			default: null
		},

		cancellationUrl: {
			type: String,
			trim: true
		},

		status: {
			type: String,
			enum: ["active", "review", "cancelled"],
			default: "active"
		},

		notes: {
			type: String,
			trim: true
		}
	},
	{
		timestamps: true
	}
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
