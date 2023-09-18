import axios from "axios";
const url = "http://localhost:5000/portfoilo";

export const fetchBio = () => axios.get(`${url}/bio`);
export const postBio = (newBio) => axios.post(`${url}/bio`, newBio);
export const patchBio = (id,updatedBio) => axios.patch(`${url}/bio/${id}`,updatedBio);


export const fetchBioCard = () => axios.get(`${url}/bioCard`);
export const postBioCard = (newBioCard) => axios.post(`${url}/bioCard`,newBioCard);
export const patchBioCard = (id,updatedBioCard) => axios.patch(`${url}/bioCard/${id}`,updatedBioCard);
export const deleteBioCard = (id) => axios.delete(`${url}/bioCard/${id}`);


export const fetchBioSkill = () => axios.get(`${url}/bioSkill`);
export const postBioSkill = (newBioSkill) => axios.post(`${url}/bioSkill`,newBioSkill);
export const patchBioSkill = (id,updatedBioSkill) => axios.patch(`${url}/bioSkill/${id}`,updatedBioSkill);
export const deleteBioSkill = (id) => axios.delete(`${url}/bioSkill/${id}`);


export const fetchProject = () => axios.get(`${url}/project`);
export const postProject = (newProject) => axios.post(`${url}/project`,newProject);
export const patchProject = (id,updatedProject) => axios.patch(`${url}/project/${id}`,updatedProject);
export const deleteProject = (id) => axios.delete(`${url}/project/${id}`);


export const fetchContact = () => axios.get(`${url}/contact`);
export const postContact = (newContact) => axios.post(`${url}/contact`,newContact);
export const patchContact = (id,updatedContact) => axios.patch(`${url}/contact/${id}`,updatedContact);
export const deleteContact = (id) => axios.delete(`${url}/contact/${id}`);


export const fetchSocialMedia = () => axios.get(`${url}/socialMedia`);
export const fetchTestimonial = () => axios.get(`${url}/testimonial`);
export const fetchExperience = () => axios.get(`${url}/experience`);
