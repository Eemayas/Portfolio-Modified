import ProjectModel from "../models/ProjectsModel.js";
import mongoose from "mongoose";

export const getProject = async (req, res) => {
    try {
      const project = await ProjectModel.find();
      console.log(`getProject:\n${project}`);
      res.status(200).json(project);
    } catch (error) {
      res.status(404).json({ message: `getProject Error:\n${error.message}` });
    }
  };
  
  export const createProject = async (req, res) => {
    const project = req.body;
    const newProject = new ProjectModel(project);
    try {
      await ProjectModel.createIndexes();
      await newProject.save();
      res.status(201).json(newProject);
    } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
        res.status(400).json({ message: 'Project with the same name already exists.' });
      } else {
        res.status(500).json({ message: `createProject Error:\n${error.message}` });
      }
    }
    
  };
  
  export const editProject = async (req, res) => {
    try {
      const { id } = req.params;
      const project = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);
  
      const updatedproject = {...project, _id: id };
  
      await ProjectModel.findByIdAndUpdate(id, updatedproject, { new: true });
  
      res.status(201).json(updatedproject);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
            res.status(400).json({ message: 'Project with the same name already exists.' });
          } else {
      res.status(404).json({ message: `editproject Error:\n ${error.message}` });
    }}
  };
  
  export const deleteProject = async (req, res) => {
    try {
      const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await ProjectModel.findByIdAndRemove(id);
  
    res.status(200).json({ message: "Post deleted successfully." });
    } catch (error) {
      res.status(404).json({ message: `deleteproject Error:\n ${error.message}` });
   
      
    }
    
  };