import mongoose from "mongoose";

const bioCardSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  selectedImage: String,
});
const BioCardModel= mongoose.model("BioCardModel",bioCardSchema);
export default BioCardModel
