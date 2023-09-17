// src/actions/dataActions.js
import * as api from "../api/apis";

import {FETCH_BIO_SUCCESS,POST_BIO_SUCCESS,PATCH_BIO_SUCCESS} from "../constant"
import {FETCH_BIOCARD_SUCCESS,POST_BIOCARD_SUCCESS,PATCH_BIOCARD_SUCCESS,DELETE_BIOCARD_SUCCESS} from "../constant"
import {FETCH_BIOSKILL_SUCCESS,POST_BIOSKILL_SUCCESS,PATCH_BIOSKILL_SUCCESS,DELETE_BIOSKILL_SUCCESS} from "../constant"
import {FETCH_PROJECT_SUCCESS,POST_PROJECT_SUCCESS,PATCH_PROJECT_SUCCESS,DELETE_PROJECT_SUCCESS} from "../constant"
import {FETCH_CONTACT_SUCCESS,POST_CONTACT_SUCCESS,PATCH_CONTACT_SUCCESS,DELETE_CONTACT_SUCCESS} from "../constant"
import {FETCH_SOCIAL_MEDIA_SUCCESS,POST_SOCIAL_MEDIA_SUCCESS,PATCH_SOCIAL_MEDIA_SUCCESS,DELETE_SOCIAL_MEDIA_SUCCESS} from "../constant"
import {FETCH_TESTIMONIAL_SUCCESS,POST_TESTIMONIAL_SUCCESS,PATCH_TESTIMONIAL_SUCCESS,DELETE_TESTIMONIAL_SUCCESS} from "../constant"
import {FETCH_EXPERIENCES_SUCCESS,POST_EXPERIENCES_SUCCESS,PATCH_EXPERIENCES_SUCCESS,DELETE_EXPERIENCES_SUCCESS} from "../constant"


export const fetchBio = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchBio(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_BIO_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchBio(action)\n"+error.message)
    }
  };
};
export const postBio = (newBio) => {
  return async (dispatch) => {
    try {
      console.log(newBio);
      const response = await api.postBio(newBio);
      console.log(response);
      dispatch({ type: POST_BIO_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("postBio(action)\n" + error.message);
      
    }
  };
};

export const fetchBioCard = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchBioCard();
      console.log(response);
      dispatch({ type: FETCH_BIOCARD_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchBioCard(action)\n"+error.message)
    }
  };
};
export const fetchBioSkill = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchBioSkill(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_BIOSKILL_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchBioSkill(action)\n"+error.message)
    }
  };
};
export const fetchProject = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchProject(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_PROJECT_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchProject(action)\n"+error.message)
    }
  };
};
export const fetchContact = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchContact(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_CONTACT_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchContact(action)\n"+error.message)
    }
  };
};
export const fetchSocialMedia = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchSocialMedia(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_SOCIAL_MEDIA_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchSocialMedia(action)\n"+error.message)
    }
  };
};
export const fetchTestimonial = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchTestimonial(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_TESTIMONIAL_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchTestimonial(action)\n"+error.message)
    }
  };
};
export const fetchExperience = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchExperience(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchExperience(action)\n"+error.message)
    }
  };
};
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await api.fetchExperience(); // Replace with your API endpoint
      console.log(response);
      dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("fetchData(action)\n"+error.message)
    }
  };
};
