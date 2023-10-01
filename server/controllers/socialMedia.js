import SocialMediaModel from "../models/SocialMediaModel.js";
import mongoose from "mongoose";

export const getSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMediaModel.find();
    console.log(`getSocialMedia:\n${socialMedia}`);
    res.status(200).json(socialMedia);
  } catch (error) {
    res.status(404).json({ message: `getSocialMedia Error:\n${error.message}` });
  }
};

export const createSocialMedia = async (req, res) => {
  const socialMedia = req.body;
  const newSocialMedia = new SocialMediaModel(socialMedia);

  try {
    await SocialMediaModel.createIndexes();
    await newSocialMedia.save();
    res.status(201).json(newSocialMedia);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "SocialMedia with the same name already exists." });
    } else {
      res
        .status(500)
        .json({ message: `createSocialMedia Error:\n${error.message}` });
    }
  }
};

export const editSocialMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const socialMedia = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedsocialMedia = { ...socialMedia, _id: id };

    await SocialMediaModel.findByIdAndUpdate(id, updatedsocialMedia, { new: true });

    res.status(201).json(updatedsocialMedia);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "SocialMedia with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `editsocialMedia Error:\n ${error.message}` });
    }
  }
};

export const deleteSocialMedia = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await SocialMediaModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(404)
      .json({ message: `deletesocialMedia Error:\n ${error.message}` });
  }
};
