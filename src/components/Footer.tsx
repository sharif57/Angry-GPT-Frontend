import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-[#101010]  ">
      {/* <div className="absolute inset-0 bg-[url('/image.png')] bg-no-repeat bg-cover -top-[500px] left-[800px] w-[300px]"></div> */}

      <div className="relative">
      {/* <div className="absolute inset-0 bg-[url('/image.png')] bg-no-repeat   w-[300px] -top-[250px]  left-[900px]"></div> */}
        <div className="container mx-auto  px-2 lg:px-0">
          {/* Newsletter Section */}
          <div>
            <div className="space-y-8 flex justify-between">
              <div className="pt-14 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Get started today
                </h2>

                {/* Email Subscription */}
                <div className="lg:w-[500px] lg:-mb-36">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter Your E-mail"
                      className="w-full pl-4 pr-24 py-6 px- rounded-full bg-white dark:bg-white text-black"
                    />
                    <Button className="absolute right-1 top-1.5 bottom-2 py-5 rounded-full bg-black hover:bg-black/90 text-white px-6">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex flex-col md:flex-row gap-8 justify-between items-center mb-20 pt-12">
              <div className="w-full flex justify-end">
                <div className="">
                  <div className="relative flex items-center md:gap-4  ">
                    <div className="ml-0 lg:ml-52 ">
                      <Image
                        src="/footer2.png"
                        alt="Xbox Series X"
                        width={150}
                        height={150}
                        style={{ objectFit: "contain" }}
                        className="hidden lg:inline-block absolute -top-[148px] left-0 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] lg:flex items-center justify-between -mt-16 lg:-mt-0 ">
            <div className="space-y-4">
              <div className="flex items-center  gap-4 ">
                <Image
                  className="h-[40px] w-[23px]"
                  src={"/logo.svg"}
                  alt="logo"
                  height={100}
                  width={100}
                />
                <h1 className="lg:text-[24px] text-[18px] font-medium text-white dark:text-white">
                  Angry GPT
                </h1>
              </div>
              <p className="text-white     max-w-md">
                Engage in Real Conversations with Our Cutting-Edge AI Chatbot,
                Featuring Unique Personalities like Angry GPT, Lola, and Mimi.
                Try It Now!
              </p>
            </div>
            {/* <div className="max-w-md">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-full pl-4 pr-24 py-3 rounded-full  bg-white text-black"
            />
            <Button className="absolute right-1 top-0  rounded-full bg-black hover:bg-black/90 text-white px-6">
              Subscribe
            </Button>
          </div>
        </div> */}
            <div className="text-center lg:text-center mt-6 lg:mt-0 pb-6">
              <h3 className="text-white text-[24px] font-medium mb-4">
                Connect Us With
              </h3>
              <div className="flex items-center justify-center lg:justify-end gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9999 0.5C-4.7968 1.22632 -7.32564 36.0213 16.8588 40.5001H23.1409C47.3309 36.0171 44.7911 1.22379 19.9999 0.5Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M23.1409 26.4382H27.8252L28.7165 20.6218H23.1409V16.8471C23.1409 15.2559 23.9199 13.7048 26.4172 13.7048H28.9523V8.75274C23.5233 7.77463 17.0007 8.07232 16.8588 16.1885V20.6218H11.7544V26.4382H16.8588V40.4997H23.1409V26.4382Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2345_6002)">
                      <path
                        d="M20 40.5C31.0457 40.5 40 31.5457 40 20.5C40 9.45431 31.0457 0.5 20 0.5C8.95431 0.5 0 9.45431 0 20.5C0 31.5457 8.95431 40.5 20 40.5Z"
                        fill="#0B69C7"
                      />
                      <path
                        d="M15.5263 13.2289C15.5268 13.7694 15.367 14.2979 15.067 14.7475C14.7671 15.1971 14.3405 15.5477 13.8412 15.7547C13.342 15.9618 12.7926 16.0161 12.2624 15.9108C11.7323 15.8055 11.2453 15.5453 10.8632 15.1631C10.481 14.7809 10.2208 14.294 10.1155 13.7638C10.0102 13.2337 10.0645 12.6843 10.2715 12.185C10.4786 11.6858 10.8291 11.2592 11.2787 10.9593C11.7284 10.6593 12.2568 10.4995 12.7973 10.5C13.5209 10.5007 14.2146 10.7884 14.7262 11.3001C15.2378 11.8117 15.5256 12.5054 15.5263 13.2289Z"
                        fill="white"
                      />
                      <path
                        d="M14.2342 17.0972H11.3605C10.987 17.0972 10.6842 17.4 10.6842 17.7735V29.8235C10.6842 30.197 10.987 30.4998 11.3605 30.4998H14.2342C14.6077 30.4998 14.9105 30.197 14.9105 29.8235V17.7735C14.9105 17.4 14.6077 17.0972 14.2342 17.0972Z"
                        fill="white"
                      />
                      <path
                        d="M29.9342 24.0446V29.8789C29.9342 30.0436 29.8687 30.2015 29.7523 30.318C29.6358 30.4345 29.4778 30.4999 29.3131 30.4999H26.2289C26.0642 30.4999 25.9062 30.4345 25.7898 30.318C25.6733 30.2015 25.6079 30.0436 25.6079 29.8789V24.2262C25.6079 23.3815 25.8526 20.542 23.4026 20.542C21.5026 20.542 21.1157 22.4946 21.0342 23.371V29.892C21.0308 30.0535 20.9645 30.2074 20.8496 30.3208C20.7346 30.4343 20.5799 30.4986 20.4184 30.4999H17.4342C17.3525 30.5003 17.2716 30.4844 17.1961 30.4533C17.1206 30.4223 17.052 30.3765 16.9942 30.3188C16.9365 30.261 16.8908 30.1924 16.8597 30.1169C16.8286 30.0414 16.8128 29.9605 16.8131 29.8789V17.721C16.8128 17.6392 16.8286 17.5581 16.8596 17.4825C16.8907 17.4068 16.9364 17.3381 16.9941 17.2801C17.0518 17.2222 17.1204 17.1762 17.1959 17.1448C17.2714 17.1134 17.3524 17.0973 17.4342 17.0973H20.4184C20.5012 17.0959 20.5834 17.111 20.6603 17.1417C20.7372 17.1724 20.8072 17.2181 20.8662 17.2762C20.9252 17.3342 20.9721 17.4035 21.0041 17.4798C21.0361 17.5562 21.0526 17.6382 21.0526 17.721V18.7736C21.7579 17.721 22.8052 16.8999 25.0342 16.8999C29.9631 16.8973 29.9342 21.5104 29.9342 24.0446Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2345_6002">
                        <rect
                          width="40"
                          height="40"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 40.5C31.0457 40.5 40 31.5457 40 20.5C40 9.45431 31.0457 0.5 20 0.5C8.95431 0.5 0 9.45431 0 20.5C0 31.5457 8.95431 40.5 20 40.5Z"
                      fill="url(#paint0_linear_2345_6011)"
                    />
                    <path
                      d="M24.2489 9.38867H15.76C11.9734 9.38867 8.89783 12.4642 8.89783 16.2509V24.7398C8.89783 28.5265 11.9734 31.602 15.76 31.602H24.2489C28.0356 31.602 31.1112 28.5265 31.1112 24.7398V16.2509C31.1112 12.4642 28.0356 9.38867 24.2489 9.38867ZM28.6312 24.7487C28.6312 27.1664 26.6667 29.1398 24.2401 29.1398H15.7512C13.3334 29.1398 11.36 27.1753 11.36 24.7487V16.2598C11.36 13.842 13.3245 11.8687 15.7512 11.8687H24.2401C26.6578 11.8687 28.6312 13.8331 28.6312 16.2598V24.7487Z"
                      fill="white"
                    />
                    <path
                      d="M19.9999 14.8198C16.8711 14.8198 14.3199 17.3709 14.3199 20.4998C14.3199 23.6287 16.8711 26.1798 19.9999 26.1798C23.1288 26.1798 25.6799 23.6287 25.6799 20.4998C25.6799 17.3709 23.1288 14.8198 19.9999 14.8198ZM19.9999 23.9487C18.0977 23.9487 16.5511 22.402 16.5511 20.4998C16.5511 18.5976 18.0977 17.0509 19.9999 17.0509C21.9022 17.0509 23.4488 18.5976 23.4488 20.4998C23.4488 22.402 21.9022 23.9487 19.9999 23.9487Z"
                      fill="white"
                    />
                    <path
                      d="M26.1132 15.4429C26.6365 15.3576 26.9916 14.8643 26.9064 14.341C26.8212 13.8177 26.3279 13.4626 25.8046 13.5478C25.2813 13.6331 24.9261 14.1264 25.0114 14.6497C25.0966 15.173 25.5899 15.5281 26.1132 15.4429Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2345_6011"
                        x1="4.77147"
                        y1="35.7285"
                        x2="33.1937"
                        y2="7.30631"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEE411" />
                        <stop offset="0.052" stopColor="#FEDB16" />
                        <stop offset="0.138" stopColor="#FEC125" />
                        <stop offset="0.248" stopColor="#FE983D" />
                        <stop offset="0.376" stopColor="#FE5F5E" />
                        <stop offset="0.5" stopColor="#FE2181" />
                        <stop offset="1" stopColor="#9000DC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full  hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6274 0.5498C21.3919 0.352431 24.1979 0.75047 26.804 1.69111C30.6976 3.09448 34.1213 5.7494 36.4654 9.15881C38.5211 12.1352 39.7519 15.6799 39.9512 19.2933C40.0146 20.0927 40.0165 20.8973 39.9512 21.6961C39.7374 25.6586 38.2789 29.538 35.8563 32.6788C33.474 35.7912 30.1571 38.1781 26.4443 39.4369C21.7693 41.0409 16.4984 40.8237 11.9759 38.825C7.95623 37.0704 4.55361 33.9508 2.45303 30.1004C0.517441 26.5815 -0.314737 22.4638 0.107621 18.4708C0.52866 14.1122 2.46161 9.9265 5.47685 6.75407C8.26046 3.80211 11.962 1.72478 15.9395 0.913515C16.8258 0.730667 17.7246 0.608549 18.6274 0.5498ZM16.375 11.0883C13.3802 11.1411 10.3683 11.4817 7.49164 12.3431C6.639 12.5953 6.04968 13.5207 6.2041 14.4C6.28594 15.0264 6.71885 15.5868 7.2963 15.8377C7.74241 16.041 8.26574 16.0364 8.72506 15.8799C10.8395 15.2601 13.0397 14.9809 15.2353 14.8621C16.1375 14.8403 17.0396 14.7776 17.9417 14.8357C19.5249 14.8594 21.1054 15 22.6721 15.2317C25.8821 15.7175 29.0808 16.608 31.8927 18.2688C32.4708 18.5923 33.2179 18.5613 33.7749 18.2061C34.4256 17.8068 34.7806 16.981 34.6077 16.2351C34.5001 15.701 34.1431 15.2297 33.6634 14.9736C32.2247 14.1287 30.6864 13.46 29.1072 12.9273C25.0149 11.5668 20.6785 11.0269 16.3757 11.0889L16.375 11.0883ZM15.8497 17.9751C13.3948 18.0431 10.9391 18.3949 8.58911 19.1184C7.85328 19.3488 7.38143 20.191 7.57413 20.9376C7.73383 21.7462 8.61551 22.3086 9.41667 22.1172C13.5762 20.8683 18.0427 20.8122 22.2828 21.6763C24.8097 22.2004 27.2824 23.0777 29.4906 24.4276C29.6991 24.5536 29.9367 24.6223 30.1782 24.6467C30.8718 24.6975 31.5661 24.2315 31.7707 23.5641C32.0195 22.8407 31.6406 21.9997 30.9589 21.6716C28.8907 20.4254 26.6218 19.5323 24.2877 18.9283C21.5377 18.2187 18.6881 17.9038 15.8504 17.9744L15.8497 17.9751ZM16.2001 24.4969C13.99 24.5563 11.7891 24.8593 9.63049 25.3352C9.45098 25.3761 9.26818 25.4071 9.09858 25.4817C8.65444 25.6758 8.34163 26.1524 8.37199 26.6415C8.35615 27.2019 8.79567 27.7142 9.33352 27.8363C9.65952 27.9089 9.98817 27.8172 10.3049 27.7432C13.7115 27.0019 17.256 26.7174 20.7101 27.2897C23.0721 27.6805 25.3732 28.4898 27.4184 29.7413C27.7747 29.9737 28.2459 30.0179 28.63 29.8265C29.1362 29.6027 29.445 29.008 29.3282 28.4654C29.2629 28.1228 29.0524 27.8092 28.7508 27.6323C27.1062 26.6244 25.3172 25.8527 23.4575 25.3405C21.1015 24.6843 18.6426 24.4361 16.2008 24.4969H16.2001Z"
                      fill="#1ED760"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
