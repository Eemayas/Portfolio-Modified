import axios from "axios";
const url = "http://localhost:5000/portfoilo";

export const fetchBio = () => axios.get(`${url}/bio`);
export const postBio = (newBio) => axios.post(`${url}/bio`, newBio);
export const patchBio = (id,updatedBio) => axios.patch(`${url}/bio/${id}`,updatedBio);


export const fetchBioCard = () => axios.get(`${url}/bioCard`);
export const postBioCard = (newBioCard) => axios.post(`${url}/bioCard`,newBioCard);


export const fetchBioSkill = () => axios.get(`${url}/bioSkill`);
export const fetchProject = () => axios.get(`${url}/project`);
export const fetchContact = () => axios.get(`${url}/contact`);
export const fetchSocialMedia = () => axios.get(`${url}/socialMedia`);
export const fetchTestimonial = () => axios.get(`${url}/testimonial`);
export const fetchExperience = () => axios.get(`${url}/experience`);
