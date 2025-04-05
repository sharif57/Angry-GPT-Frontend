"use client";

import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    userProfileGet: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["Users"],
    }),

    updateProfile: builder.mutation({
      query: (updateInfo) => ({
        url: "/profile/edit",
        method: "PATCH",
        body: updateInfo,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useUpdateProfileMutation, useUserProfileGetQuery } = userApi;
