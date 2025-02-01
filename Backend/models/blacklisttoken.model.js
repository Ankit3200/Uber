import mongoose from "mongoose";
import crypto from "crypto";

const blacklistTokenSchema = new mongoose.Schema({
    tokenHash: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600, // Expires in 1 hour
    },
});

// Static method to hash tokens
blacklistTokenSchema.statics.hashToken = function (token) {
    return crypto.createHash("sha256").update(token).digest("hex");
};

const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);

export default BlacklistToken;
