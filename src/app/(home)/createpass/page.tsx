"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Eye, EyeOff } from "lucide-react"

export default function ResetPassword() {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwords.password === passwords.confirmPassword) {
      console.log("Password reset successful")
      // Add your password reset logic here
    } else {
      console.log("Passwords don't match")
    }
  }

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="w-full max-w-md p-6 bg-[#212121] rounded-lg shadow-lg py-12">

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CAEA31] h-5 w-5" />
            <Input
              type={showPassword.password ? "text" : "password"}
              placeholder="Enter your password"
              value={passwords.password}
              onChange={(e) => setPasswords((prev) => ({ ...prev, password: e.target.value }))}
              className="w-full pl-10 pr-10 bg-[#2a2a2a] border-[#333333] text-white placeholder:text-gray-400 focus:ring-[#c8ff00] focus:border-[#c8ff00]"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword.password ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CAEA31] h-5 w-5" />
            <Input
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              value={passwords.confirmPassword}
              onChange={(e) => setPasswords((prev) => ({ ...prev, confirmPassword: e.target.value }))}
              className="w-full pl-10 pr-10 bg-[#2a2a2a] border-[#333333] text-white placeholder:text-gray-400 focus:ring-[#c8ff00] focus:border-[#c8ff00]"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword.confirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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
  )
}

