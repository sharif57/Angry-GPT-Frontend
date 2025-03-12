import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function HowWork() {
  return (
    <div className="container mx-auto lg:flex items-center gap-9 lg:mt-[160px] mt-20">
      <div>
        <Image src="/work.png" height={1200} width={900} alt="work"></Image>
      </div>
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white dark:bg-lime-900/30 border border-lime-200 dark:border-lime-700">
              <span className="text-sm font-medium text-black dark:text-white">
                How it Works
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Start Chatting in Just a Few Easy Steps!
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground dark:text-[#FFFFFF] mb-12 leading-relaxed">
              Unlock Instant Access to AI-Powered Conversations with Just a Few
              Easy Steps! From Signing Up to Choosing Your AI Model, You&apos;ll Be
              Talking to Our AI in No Time. Whether You're Enjoying Free Chats
              or Unlocking Premium Features, It's All Set Up for You to Begin
              Right Away!
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31] text-black font-medium px-8 py-6 text-lg"
            >
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
