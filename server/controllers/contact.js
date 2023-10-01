import ContactModel from "../models/ContactModel.js";
import mongoose from "mongoose";

export const getContact = async (req, res) => {
  try {
    const contact = await ContactModel.find();
    console.log(`getContact:\n${contact}`);
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({ message: `getContact Error:\n${error.message}` });
  }
};

export const createContact = async (req, res) => {
  const contact = req.body;
  const newContact = new ContactModel(contact);

  try {
    await ContactModel.createIndexes();
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.detail) {
      res
        .status(400)
        .json({ message: "Contact with the same detail already exists." });
    } else {
      res
        .status(500)
        .json({ message: `createContact Error:\n${error.message}` });
    }
  }
};

export const editContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedcontact = { ...contact, _id: id };

    await ContactModel.findByIdAndUpdate(id, updatedcontact, { new: true });

    res.status(201).json(updatedcontact);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "Contact with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `editcontact Error:\n ${error.message}` });
    }
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await ContactModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(404)
      .json({ message: `deletecontact Error:\n ${error.message}` });
  }
};
