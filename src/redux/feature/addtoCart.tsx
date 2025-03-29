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
    }),



    addToCartBook: builder.mutation({
      query: ({ bookId }) => ({
        url: `/cart/${bookId}/add`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCheckoutBuyMutation, useAddToCartBookMutation } = checkoutApi;
