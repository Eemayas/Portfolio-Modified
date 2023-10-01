import IntroductionModel from "../models/IntroductionModel.js";
import BioCardModel from "../models/BioCardModel.js";
import BioSkillModel from "../models/BioSkillModel.js";
import mongoose from "mongoose";

export const getBio = async (req, res) => {
  try {
    const bio = await IntroductionModel.find();
    console.log(`getBio:\n${bio}`);
    res.status(200).json(bio);
  } catch (error) {
    res.status(404).json({ message: `getBio Error:\n${error.message}` });
  }
};

export const createBio = async (req, res) => {
  const bio = req.body;
  const newBio = new IntroductionModel(bio);
  try {
    await newBio.save();
    res.status(201).json(newBio);
  } catch (error) {
    res.status(404).json({ message: `createBio Error:\n${error.message}` });
  }
};

export const editBio = async (req, res) => {
  try {
    const { id } = req.params;
    const { bio, selectedImage } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedBio = { bio, selectedImage, _id: id };

    await IntroductionModel.findByIdAndUpdate(id, updatedBio, { new: true });

    res.status(201).json(updatedBio);
  } catch (error) {
    res.status(404).json({ message: `editBio Error:\n ${error.message}` });
  }
};

export const getBioCard = async (req, res) => {
  try {
    const bioCard = await BioCardModel.find();
    console.log(`getBioCard:\n${bioCard}`);
    res.status(200).json(bioCard);
  } catch (error) {
    res.status(404).json({ message: `getBioCard Error:\n${error.message}` });
  }
};

export const createBioCard = async (req, res) => {
  const bioCard = req.body;
  const newBioCard = new BioCardModel(bioCard);
  try {await BioCardModel.createIndexes();
    await newBioCard.save();
    res.status(201).json(newBioCard);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.title) {
      res
        .status(400)
        .json({ message: "BioCard with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `createBioCard Error:\n${error.message}` });
    }
  }
};

export const editBioCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, selectedImage } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedBioCard = { title, selectedImage, _id: id };

    await BioCardModel.findByIdAndUpdate(id, updatedBioCard, { new: true });

    res.status(201).json(updatedBioCard);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.title) {
      res
        .status(400)
        .json({ message: "BioCard with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `editBioCard Error:\n ${error.message}` });
    }
  }
};

export const deleteBioCard = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await BioCardModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(404)
      .json({ message: `deleteBioCard Error:\n ${error.message}` });
  }
};

export const getBioSkill = async (req, res) => {
  try {
    const bioSkill = await BioSkillModel.find();
    console.log(`getbioSkill:\n${bioSkill}`);
    res.status(200).json(bioSkill);
  } catch (error) {
    res.status(404).json({ message: `getbioSkill Error:\n${error.message}` });
  }
};

export const createBioSkill = async (req, res) => {
  const bioSkill = req.body;
  const newBioSkill = new BioSkillModel(bioSkill);
  try {
    await BioSkillModel.createIndexes();
    await newBioSkill.save();
    res.status(201).json(newBioSkill);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.title) {
      res
        .status(400)
        .json({ message: "BioSkill with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `createbioSkill Error:\n${error.message}` });
    }
  }
};

export const editBioSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, selectedImage } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedbioSkill = { title, selectedImage, _id: id };

    await BioSkillModel.findByIdAndUpdate(id, updatedbioSkill, { new: true });

    res.status(201).json(updatedbioSkill);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.title) {
      res
        .status(400)
        .json({ message: "BioSkill with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `editbioSkill Error:\n ${error.message}` });
    }
  }
};

export const deleteBioSkill = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await BioSkillModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(404)
      .json({ message: `deletebioSkill Error:\n ${error.message}` });
  }
};
