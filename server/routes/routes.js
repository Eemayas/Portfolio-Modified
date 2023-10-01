import express from "express";
import {
  getBio,
  createBio,
  editBio,
  createBioCard,
  editBioCard,
  getBioCard,
  deleteBioCard,
  createBioSkill,
  deleteBioSkill,
  editBioSkill,
  getBioSkill,
} from "../controllers/bio.js";

import {
  getProject,
  createProject,
  deleteProject,
  editProject,
} from "../controllers/project.js";

import {
  getSocialMedia,
  createSocialMedia,
  deleteSocialMedia,
  editSocialMedia,
} from "../controllers/socialMedia.js";

import {
  getContact,
  createContact,
  deleteContact,
  editContact,
} from "../controllers/contact.js";

import {
  getTestimonial,
  createTestimonial,
  deleteTestimonial,
  editTestimonial,
} from "../controllers/testimonial.js";

import {
  getExperience,
  createExperience,
  deleteExperience,
  editExperience,
} from "../controllers/experience.js";
const router = express.Router();

router.get("/bio", getBio);
router.post("/bio", createBio);
router.patch("/bio/:id", editBio);

router.get("/bioCard", getBioCard);
router.post("/bioCard", createBioCard);
router.patch("/bioCard/:id", editBioCard);
router.delete("/bioCard/:id", deleteBioCard);

router.get("/bioSkill", getBioSkill);
router.post("/bioSkill", createBioSkill);
router.patch("/bioSkill/:id", editBioSkill);
router.delete("/bioSkill/:id", deleteBioSkill);

router.get("/project", getProject);
router.post("/project", createProject);
router.patch("/project/:id", editProject);
router.delete("/project/:id", deleteProject);

router.get("/contact", getContact);
router.post("/contact", createContact);
router.patch("/contact/:id", editContact);
router.delete("/contact/:id", deleteContact);

router.get("/socialMedia", getSocialMedia);
router.post("/socialMedia", createSocialMedia);
router.patch("/socialMedia/:id", editSocialMedia);
router.delete("/socialMedia/:id", deleteSocialMedia);

router.get("/testimonial", getTestimonial);
router.post("/testimonial", createTestimonial);
router.patch("/testimonial/:id", editTestimonial);
router.delete("/testimonial/:id", deleteTestimonial);

router.get("/experience", getExperience);
router.post("/experience", createExperience);
router.patch("/experience/:id", editExperience);
router.delete("/experience/:id", deleteExperience);

export default router;
