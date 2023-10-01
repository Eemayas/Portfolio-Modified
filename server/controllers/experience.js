import ExperienceModel from "../models/ExperiencesModel.js";
import mongoose from "mongoose";

export const getExperience = async (req, res) => {
  try {
    const experience = await ExperienceModel.find();
    console.log(`getExperience:\n${experience}`);
    res.status(200).json(experience);
  } catch (error) {
    res.status(404).json({ message: `getExperience Error:\n${error.message}` });
  }
};

export const createExperience = async (req, res) => {
  const experience = req.body;
  const newExperience = new ExperienceModel(experience);

  try {
    await ExperienceModel.createIndexes();
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "Experience with the same name already exists." });
    } else {
      res
        .status(500)
        .json({ message: `createExperience Error:\n${error.message}` });
    }
  }
};

export const editExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedexperience = { ...experience, _id: id };

    await ExperienceModel.findByIdAndUpdate(id, updatedexperience, {
      new: true,
    });

    res.status(201).json(updatedexperience);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "Experience with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `editexperience Error:\n ${error.message}` });
    }
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await ExperienceModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(404)
      .json({ message: `deleteexperience Error:\n ${error.message}` });
  }
};
