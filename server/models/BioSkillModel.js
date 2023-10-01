import mongoose from "mongoose";

const bioSkillSchema = mongoose.Schema({
  title:{
    type: String,
    unique: true,
  },
  selectedImage: String,
});
const BioSkillModel= mongoose.model("BioSkillModel",bioSkillSchema);
export default BioSkillModel
