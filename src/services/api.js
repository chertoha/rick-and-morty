import axios from "axios";
import { BASE_URL } from "utils/apiConfig";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCharacters = async (page = 1, name = "") => {
  const response = await api.get("/character", {
    params: {
      page,
      name,
    },
  });

  return response.data;
};

export const getCharacter = async (id) => {
  const response = await api.get(`character/${id}`);
  return response.data;
};
