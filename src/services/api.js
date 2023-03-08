import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
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
