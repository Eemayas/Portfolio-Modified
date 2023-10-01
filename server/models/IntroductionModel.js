import mongoose from "mongoose";

const introductionSchema = mongoose.Schema({
  bio: String,
  selectedImage: String,
});
const IntroductionModel= mongoose.model("introductionModel",introductionSchema);
export default IntroductionModel
