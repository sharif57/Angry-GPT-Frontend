"use client";

import baseApi from "../api/baseApi";

export const booksApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({

    
    allBooksGet: builder.query({
      query: ({ limit, state }) => {
        const queryParams = new URLSearchParams();
        if (limit) queryParams.append("limit", limit.toString())
        if (state) queryParams.append("state", state.toString());
        console.log(state, "books");

        return `/books?${queryParams.toString()}`;
      },
      providesTags: ["Books"],
    }),

    booksDetailGet: builder.query({
      query: (_id) => ({
        url: `/books/${_id}`,
        method: "GET",
      }),
      providesTags: ["Books"], 
    }),

  }),
});

export const { useAllBooksGetQuery, useBooksDetailGetQuery } = booksApi;
