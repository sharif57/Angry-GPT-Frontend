"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useForgotPasswordMutation } from "@/redux/feature/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [forgotPassword] = useForgotPasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await forgotPassword({
        email,
      }).unwrap();

      console.log(response);

      if (response.message) {
        // Save tokens and user data to localStorage and cookies

        // Show success toast notification
        toast.success(response.message || "Login Successful!", {
          autoClose: 1000,
        });

        // Redirect to the home page
        setTimeout(() => {
          // router.push("/forgotOtp");
          router.push(`/forgotOtp?email=${email}`); // Pass email to OTP page
        }, 1500); // Redirect after 1.5 seconds
      } else {
        toast.error(response.message || "Invalid credentials!");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      if (
        error &&
        typeof error === "object" &&
        "data" in error &&
        typeof error.data === "object" &&
        error.data &&
        "message" in error.data
      ) {
        toast.error(
          (error.data as { message: string }).message ||
            "Something went wrong. Try again!"
        );
      } else {
        toast.error("Something went wrong. Try again!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-16 px-2">
      <div className="w-full max-w-md p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
        <div className="space-y-2 mb-6">
          <h1 className="text-2xl font-medium text-white">Forgot Password ?</h1>
          <p className="text-sm text-gray-400">
            Please enter your email address to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CAEA31] h-5 w-5" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 bg-[#2a2a2a] border-[#333333] text-white placeholder:text-gray-400 focus:ring-[#CAEA31] focus:border-[#CAEA31]"
              required
            />
          </div>

          {/* <Link href={'/forgotOtp'}> */}
          <Button
            type="submit"
            className="w-full py-6 bg-[#CAEA31] hover:bg-[#CAEA31] text-black font-medium rounded-full"
          >
            Send OTP
          </Button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}
