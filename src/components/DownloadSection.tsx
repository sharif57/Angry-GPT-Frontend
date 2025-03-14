

import Image from "next/image"

export default function DownloadSection() {
  return (
    <section className="lg:py-16 md:py-24 relative ">
      <div className=" inset-0  bg-[url('/Ellipse3.png')]  bg-no-repeat -top-80  "></div>
      <div className="container mx-auto px-4" >
        {/* Main Content */}
        <div className="rounded-[46px] overflow-hidden relative">
          <div className=" lg:px-6 py-12 md:py-16 lg:py-20 ">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative bg-black rounded-[46px] min-h-[400px] md:min-h-[500px]  ">
              {/* Left Column - Text and Download Buttons */}
              <div className="text-white space-y-8 max-w-5xl pt-8 px-8">
                <h2 className="text-xl md:text-4xl lg:text-[48px] font-medium leading-[1.2]">
                  Get Our App Today Your AI Chat Companion Awaits!
                </h2>

                <div className="flex flex-wrap gap-6 pt-4">
                  {/* Google Play Button */}
                  <a
                    href="#"
                    className="transition-transform hover:scale-105 duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/googleplay.svg"
                      alt="Get it on Google Play"
                      width={180}
                      height={53}
                      className="h-[53px] w-auto"
                    />
                  </a>

                  {/* App Store Button */}
                  <a
                    href="#"
                    className="transition-transform hover:scale-105 duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/appstore.svg"
                      alt="Download on the App Store"
                      width={180}
                      height={53}
                      className="h-[53px] w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Right Column - Phone Mockup */}
              <div className="absolute right-0 hidden sm:block lg:right-12  w-[280px] pb-36  md:w-[380px]  pointer-events-none">
                <div className="relative w-full aspect-[600/400] h-[500px]">
                  <Image src="/iphone13 3.svg" alt="App Interface" fill className="object-contain" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

