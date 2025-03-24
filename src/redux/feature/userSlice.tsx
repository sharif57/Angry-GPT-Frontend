"use client";

import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({

 
    updateProfile: builder.mutation({
      query: (updateInfo) => ({
        url: "/profile/edit",
        method: "PATCH",
        body: updateInfo,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Users"], 
    }),
    

  }),
});

export const { useUpdateProfileMutation } = userApi;
