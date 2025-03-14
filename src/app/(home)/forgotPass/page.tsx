"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sending OTP here
    console.log("Sending OTP to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-16 ">
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

          <Link href={'/forgotOtp'}>
            <Button
              type="submit"
              className="w-full py-6 bg-[#CAEA31] hover:bg-[#CAEA31] text-black font-medium rounded-full"
            >
              Send OTP
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
