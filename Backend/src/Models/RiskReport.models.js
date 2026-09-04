import mongoose from "mongoose";

const riskReportSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true
		},

		score: {
			type: Number,
			required: true,
			min: 0,
			max: 100
		},

		risks: [{
			type: {
				type: String,
				enum: ["missing_recovery_method", "missing_backup_email", "weak_recovery_setup", "duplicate_subscription", "unassigned_critical_asset"],
				required: true
			},
			severity: {
				type: String,
				enum: ["low", "medium", "high", "critical"],
				required: true
			},
			message: {
				type: String,
				required: true,
				trim: true
			},
			assetId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "DigitalAsset",
				default: null
			},
			resolved: {
				type: Boolean,
				default: false
			}
		}],

		generatedAt: {
			type: Date,
			default: Date.now
		}
	},
	{
		timestamps: true
	}
);

export const RiskReport = mongoose.model("RiskReport", riskReportSchema);
