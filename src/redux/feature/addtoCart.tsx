"use client";

import baseApi from "../api/baseApi";

export const checkoutApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: ({ method }) => ({
        url: `/orders/checkout?method=${method}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useCheckoutMutation } = checkoutApi;
