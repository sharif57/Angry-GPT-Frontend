import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <main className="  ">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:space-y-14 space-y-7">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Your Personal AI Chatbot Fun, Smart & Engaging!
            </h1>

            <div className="space-y-7">
              <p className="text-lg text-muted-foreground max-w-lg">
                Engage in Real Conversations with Our Cutting-Edge AI Chatbot
                Featuring Unique Personalities like Angry GPT, Lola, and Mimi.
              </p>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <Button
                  size="lg"
                  className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31] text-black px-8 w-full sm:w-auto"
                >
                  Try For Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border border-black w-full sm:w-auto"
                >
                  Download Now
                </Button>
              </div>

              {/* User Count with Avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <Image
                    height={100}
                    width={100}
                    alt="users"
                    src={"/users.png"}
                  ></Image>
                </div>
                <span className="font-medium text-[20px] text-[#4D4D4D] dark:text-white">
                  2.4k Users
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[700px]">
            <Image
              src="/mobile2.png"
              alt="Chat Interface"
              width={900}
              height={900}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/Ellipse.png')]  lg:bottom-0 bg-no-repeat lg:bg-right-top  lg:right-0 -z-30" />
    </main>
  );
}
