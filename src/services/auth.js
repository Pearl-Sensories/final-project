import { SiPayloadcms } from "react-icons/si"
import { apiClient } from "./Config"
import axios from "axios";


export const apiRegisterUser = async (formData) => {
    try {
      const response = await axios.post(
        "https://edumatch-h6zs.onrender.com/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for FormData
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const apiUserLogin = (payload) => {
    return apiClient.post("/users/login", payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};