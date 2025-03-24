"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useResetPasswordMutation } from "@/redux/feature/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [resetPassword] = useResetPasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwords.password !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await resetPassword({
        password: passwords.password,
      }).unwrap();

      console.log(response);

      if (response.message) {
        toast.success(response.message || "Password reset successful!", {
          autoClose: 1000,
        });
        router.push("/");
      }
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
      console.error("Error resetting password:", error);
    }
  };

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-2">
      <div className="w-full max-w-md p-6 bg-[#212121] rounded-lg shadow-lg py-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CAEA31] h-5 w-5" />
            <Input
              type={showPassword.password ? "text" : "password"}
              placeholder="Enter your new password"
              value={passwords.password}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full pl-10 pr-10 bg-[#2a2a2a] border-[#333333] text-white placeholder:text-gray-400 focus:ring-[#c8ff00] focus:border-[#c8ff00]"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword.password ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CAEA31] h-5 w-5" />
            <Input
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              className="w-full pl-10 pr-10 bg-[#2a2a2a] border-[#333333] text-white placeholder:text-gray-400 focus:ring-[#c8ff00] focus:border-[#c8ff00]"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword.confirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full py-6 bg-[#CAEA31] hover:bg-[#CAEA31] text-black font-medium rounded-full"
          >
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
}
