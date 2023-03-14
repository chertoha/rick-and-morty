import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const charactersApi = createApi({
  reducerPath: "charactersApi",

  baseQuery: axiosBaseQuery({
    baseUrl: process.env.REACT_APP_RICK_AND_MORTY_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ page, name }) => ({
        url: `/character`,
        params: {
          page,
          name,
        },
      }),
    }),

    getOneCharacter: builder.query({
      query: (id) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetOneCharacterQuery } = charactersApi;
