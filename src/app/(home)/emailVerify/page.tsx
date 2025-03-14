"use client";

import type React from "react";
import {
  useRef,
  useState,
  useEffect,
  type KeyboardEvent,
  type ClipboardEvent,
} from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EmailVerify() {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5);
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    // Take the last character if multiple characters are pasted/entered
    const digit = value.substring(value.length - 1);

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Move to next input if a digit was entered
    if (digit && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Move to next input on right arrow
    if (e.key === "ArrowRight" && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to previous input on left arrow
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is all digits and not longer than our inputs
    if (!/^\d+$/.test(pastedData) || pastedData.length > 5) return;

    // Fill the OTP array with pasted digits
    const newOtp = [...otp];
    for (let i = 0; i < Math.min(pastedData.length, 5); i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus the next empty input or the last one
    const focusIndex = Math.min(pastedData.length, 4);
    inputRefs.current[focusIndex]?.focus();
  };

  // Handle verification
  const handleVerify = () => {
    const otpValue = otp.join("");
    console.log("Verifying OTP:", otpValue);
    // Add your verification logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-2">
      <div className="w-full max-w-md p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Image
              className="h-[30px] w-[18px] sm:h-[40px] sm:w-[23px]"
              src={"/logo.svg"}
              alt="logo"
              height={100}
              width={100}
            />
            <h1 className="text-[16px] sm:text-[18px] md:text-[24px] font-medium text-[#CAEA31]">
              Angry GPT
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center mb-8">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="relative">
              <input
                ref={(el) => {
                  inputRefs.current[index] = el; // Assign the element to the ref array
                }}
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-center bg-[#333333] border border-[#444444] rounded-full text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#c8ff00]"
                autoFocus={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="px-8">
          <Button
            className="w-full py-6 mb-4 bg-[#CAEA31] hover:bg-[#CAEA31] text-black font-medium rounded-full"
            onClick={handleVerify}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}
