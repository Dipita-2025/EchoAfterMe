import mongoose from "mongoose";

const emergencyCardSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true
		},

		publicTokenHash: {
			type: String,
			required: true,
			select: false
		},

		slug: {
			type: String,
			required: true,
			unique: true,
			trim: true
		},

		title: {
			type: String,
			required: true,
			trim: true
		},

		enabled: {
			type: Boolean,
			default: true
		},

		visibleFields: {
			emergencyContact: {
				type: Boolean,
				default: false
			},
			insuranceInformation: {
				type: Boolean,
				default: false
			},
			lawyerInformation: {
				type: Boolean,
				default: false
			},
			importantDocuments: {
				type: Boolean,
				default: false
			},
			customMessage: {
				type: Boolean,
				default: false
			}
		},

		customMessage: {
			type: String,
			trim: true
		},

		expiresAt: {
			type: Date,
			default: null
		},

		lastAccessedAt: {
			type: Date,
			default: null
		}
	},
	{
		timestamps: true
	}
);

export const EmergencyCard = mongoose.model("EmergencyCard", emergencyCardSchema);
