import Image from "next/image";

const features = [
  {
    title: "Angry GPT",
    description:
      "Experience bold, witty, and unfiltered conversations with Angry GPT — completely free, no subscription required!",

    icon: "/icon2.svg",
    color: "text-lime-400",
  },
  {
    title: "Lola",
    description:
      "Unlock fun, friendly, and engaging conversations with Lola — your premium AI companion for lively chats!",

    icon: "/icon3.svg",
    color: "text-lime-400",
  },
  {
    title: "Mimi",
    description:
      "Experience deep, emotional, and supportive conversations with Mimi — your premium AI companion for heartfelt interactions!",
    icon: "icon1.svg",
    color: "text-lime-400",
  },
  {
    title: "Easy to Use",
    description:
      "Seamlessly download and start chatting instantly - no setup required, just pure AI-powered conversations!",

    icon: "icon.svg",
    color: "text-lime-400",
  },
];

export default function OurFeature() {
  return (
    <section id="feature" className=" relative lg:h-[700px]">
      <div className=" ">
        <div className="absolute inset-0  bg-[url('/Ellipse3.png')]  bg-no-repeat -top-44 -z-30 "></div>
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 mb-6 rounded-full  dark:bg- border border-lime-200 dark:border-lime-700">
              <span className="text-[18px] font-medium text-black dark:text-white">
                Our Feature
              </span>
            </div>

            <h2 className="text-2xl lg:w-2/5 mx-auto md:text-4xl lg:text-5xl font-medium mb-4 lg:leading-14">
              Smart, Fast & Engaging Our Top Features!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-[#3A3A3A] border border-zinc-800 hover:border-lime-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-lime-500/10 transition-colors">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    height={100}
                    width={100}
                  />
                </div>

                <h3 className={`text-[24px] font-medium mb-2 text-[#CAEA31]`}>
                  {feature.title}
                </h3>

                <p className="text-white text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
