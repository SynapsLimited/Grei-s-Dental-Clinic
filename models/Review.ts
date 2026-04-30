import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  service: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);