"use client";
import baseApi from "../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "auth/send-otp",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found. Please verify your email again.");
        }

        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data, // Pass the payload here
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    googleLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login/google",
        method: "POST",
        body: data,
      }),
    }),

    facebookLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login/facebook",
        method: "POST",
        body: data,
      }),
    })

  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useGoogleLoginMutation,
  useFacebookLoginMutation
} = authApi;
