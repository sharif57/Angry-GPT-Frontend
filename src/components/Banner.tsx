import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <main className="min-h-screen  to-lime-50/50 dark:to-lime-950/30">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Personal AI Chatbot Fun, Smart & Engaging!
            </h1>

            <div className="space-y-7">
              <p className="text-lg text-muted-foreground max-w-lg">
                Engage in Real Conversations with Our Cutting-Edge AI Chatbot
                Featuring Unique Personalities like Angry GPT, Lola, and Mimi.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31] text-black px-8"
                >
                  Try For Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border border-black"
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
                <span className="font-medium text-[20px] text-[#4D4D4D]">
                  2.4k Users
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] md:h-[700px]">
            <div className="absolute inset-0 bg-[url('/Ellipse.png')]  bottom-0 bg-no-repeat bg-right-top -top-64 -right-6" />
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
    </main>
  );
}
