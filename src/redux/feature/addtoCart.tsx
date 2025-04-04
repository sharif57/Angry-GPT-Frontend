"use client";

import baseApi from "../api/baseApi";

export const checkoutApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    // checkoutBuy: builder.mutation({
    //   query: ({ card }) => ({
    //     url: `/orders/checkout?method=${card}`,
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }),
    // }),

    checkoutBuy: builder.mutation({
      query: (orderData) => ({
        url: "/orders/checkout?method=card",
        method: "POST",
        body: orderData,
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Cart"],
    }),

    addToCartBook: builder.mutation({
      query: ({ bookId, quantity }) => ({
        url: `/cart/${bookId}?quantity=${quantity}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Cart"],
    }),

    userCartGet: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["Cart"],
    }),

    removeFromCart: builder.mutation({
      query: (bookId) => ({
        url: `/cart/${bookId}/remove`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useCheckoutBuyMutation,
  useAddToCartBookMutation,
  useUserCartGetQuery,
  useRemoveFromCartMutation,
} = checkoutApi;
