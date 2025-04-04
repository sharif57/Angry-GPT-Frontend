"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.132:3036/api/v1",
  }),
  tagTypes: [
    "Books",
    "Users",
    'Cart'
  ],
  endpoints: () => ({}),
});

export default baseApi;
