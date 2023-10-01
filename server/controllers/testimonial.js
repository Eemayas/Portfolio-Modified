import TestimonialModel from "../models/TestimonialModel.js";
import mongoose from "mongoose";

export const getTestimonial = async (req, res) => {
  try {
    const testimonial = await TestimonialModel.find();
    console.log(`getTestimonial:\n${testimonial}`);
    res.status(200).json(testimonial);
  } catch (error) {
    res
      .status(404)
      .json({ message: `getTestimonial Error:\n${error.message}` });
  }
};

export const createTestimonial = async (req, res) => {
  const testimonial = req.body;
  const newTestimonial = new TestimonialModel(testimonial);

  try {
    await TestimonialModel.createIndexes();
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "Testimonial with the same name already exists." });
    } else {
      res
        .status(500)
        .json({ message: `createTestimonial Error:\n${error.message}` });
    }
  }
};

export const editTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedtestimonial = { ...testimonial, _id: id };

    await TestimonialModel.findByIdAndUpdate(id, updatedtestimonial, {
      new: true,
    });

    res.status(201).json(updatedtestimonial);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      res
        .status(400)
        .json({ message: "Testimonial with the same name already exists." });
    } else {
      res
        .status(404)
        .json({ message: `edittestimonial Error:\n ${error.message}` });
    }
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await TestimonialModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(404)
      .json({ message: `deletetestimonial Error:\n ${error.message}` });
  }
};
