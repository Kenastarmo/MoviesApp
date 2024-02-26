import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY, TMDB_API_BASE_URL } from "../api/apiConfig";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),

  endpoints: builder => ({
    getMovies: builder.query({
      query: ({
        search,
        type,
        page,
      }: {
        page?: number;
        type?: string;
        search?: string;
      }) => {
        if (search) {
          return `search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;

        }
        else{
          return `discover/movie?api_key=${API_KEY}&page=${page}`;
        }
        

      }
    }),

    getMovie: builder.query({
      query: ({ id }: { id: number }) =>
        `movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
    }),
  })
});

export const { useGetMoviesQuery, useGetMovieQuery } = tmdbApi;
