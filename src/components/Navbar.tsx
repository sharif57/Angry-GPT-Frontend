// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "./ui/theme-toggle";
// import Image from "next/image";
// import { X, Menu } from "lucide-react";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="sticky top-0 z-50 w-full ">
//       <header className="mx-auto max-w-[1580px] px-6 lg:px-12 py-6 flex justify-between items-center">
//         <div className="flex items-center w-[754px] justify-between">
//           {/* Logo */}
//           <Link href={"/"}>
//             <div className="flex items-center gap-4">
//               <Image
//                 className="h-[40px] w-[23px]"
//                 src={"/logo.svg"}
//                 alt="logo"
//                 height={100}
//                 width={100}
//               />
//               <h1 className="lg:text-[24px] text-[18px] font-medium text-[#212121] dark:text-white">
//                 Angry GPT
//               </h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <Link
//               href="/"
//               className="text-[18px] font-medium text-[#4D4D4D]  dark:text-[#FFFFFF]  hover:text-primary transition-colors"
//             >
//               Home
//             </Link>

//             <Link
//               href="/"
//               className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
//             >
//               Feature
//             </Link>
//             <Link
//               href="/"
//               className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
//             >
//               How it Works
//             </Link>
//             <Link href="/allBook" className="rounded-full">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="rounded-full border-[#B8D52D] flex items-center gap-2 transition-colors duration-300 bg-[#CAEA31] dark:bg-transparent text-[#212121] dark:text-white"
//               >
//                 <Image
//                   className="size-[24px] "
//                   src="/bag-2.svg"
//                   height={100}
//                   width={100}
//                   alt="bag"
//                 />
//                 <span>Shop</span>
//               </Button>
//             </Link>
//           </nav>
//         </div>

//         {/* Actions */}
//         <div className="flex items-center gap-3 justify-between">
//           <Link href={'/myprofile'}>
//             <Image
//               src={"/users.svg"}
//               height={52}
//               width={52}
//               className="size-9 hidden sm:block"
//               alt="users"
//             ></Image>
//           </Link>
//           <ThemeToggle />
//           <Link href={"/cartpage"}>
//             <Button className="rounded-full hidden sm:block bg-[#CAEA31] hover:bg-[#CAEA31] text-[#212121] font-medium">
//               Download Now
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center px-4 gap-2">
//           {/* <ThemeToggle /> */}
//           <Image
//             src={"/users.svg"}
//             height={52}
//             width={52}
//             className="size-9 "
//             alt="users"
//           ></Image>

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <Menu className="h-6 w-6 text-foreground" />
//           </Button>
//         </div>
//       </header>

//       {/* Sidebar for Mobile Navigation */}
//       <div
//         className={`fixed inset-0  bg-opacity-50 z-50 transform ${
//           mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 md:hidden`}
//       >
//         <div className="w-64 bg-background h-full shadow-lg p-6 flex flex-col">
//           <div className="flex justify-between items-center">
//             <Link href={"/"}>
//               <div className="flex items-center gap-4">
//                 <Image
//                   className="h-[40px] w-[23px]"
//                   src={"/logo.svg"}
//                   alt="logo"
//                   height={100}
//                   width={100}
//                 />
//                 <h1 className="lg:text-[24px] text-[18px] font-medium text-[#212121] dark:text-white">
//                   Angry GPT
//                 </h1>
//               </div>
//             </Link>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <X className="h-6 w-6 text-foreground" />
//             </Button>
//           </div>
//           <nav className="mt-6 flex flex-col space-y-4">
//             <Link
//               href="/"
//               className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/"
//               className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Feature
//             </Link>
//             <Link
//               href="/"
//               className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               How it Works
//             </Link>
//             <Button className="rounded-full bottom-0 top-0  bg-[#CAEA31] hover:bg-[#CAEA31] text-[#212121] font-medium">
//               Download Now
//             </Button>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import Image from "next/image";
import { X, Menu, ShoppingCart } from "lucide-react";

interface User {
  avatar: string;
  name: string;
  email: string;
  picture: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feature", href: "feature" },
    { name: "How it Works", href: "works" },
  ];

  // const data = localStorage.getItem("user");
  // const user = data ? JSON.parse(data) : null;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="mx-auto max-w-[1580px] px-6 lg:px-12 py-6 flex justify-between items-center">
        <div className="flex items-center w-[754px] justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-4">
              <Image
                className="h-[40px] w-[23px]"
                src={"/logo.svg"}
                alt="logo"
                height={100}
                width={100}
              />
              <h1 className="lg:text-[24px] text-[18px] font-medium text-[#212121] dark:text-white">
                Angry GPT
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Link href="/allBook" className="rounded-full">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#B8D52D] flex items-center gap-2 transition-colors duration-300 bg-[#CAEA31] dark:bg-transparent text-[#212121] dark:text-white"
              >
                <Image
                  className="size-[24px]"
                  src="/bag-2.svg"
                  height={100}
                  width={100}
                  alt="bag"
                />
                <span>Shop</span>
              </Button>
            </Link>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 justify-between">
          {user ? (
            <>
              <Link href={"/myprofile"}>
                <Image
                  src={` ${IMAGE}${user?.avatar}`.trim()}
                  height={52}
                  width={52}
                  className="size-9 hidden sm:block rounded-full"
                  alt="users"
                />
              </Link>
              <Link href={'/cartpage'} className="relative inline-flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-gray-700 dark:text-white" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-normal text-primary-foreground">
                  6
                </span>
              </Link>
            </>
          ) : null}
          <ThemeToggle />
          {/* <Link href={"/cartpage"}> */}
            <Button className="rounded-full hidden sm:block bg-[#CAEA31] hover:bg-[#CAEA31] text-[#212121] font-medium">
              Download Now
            </Button>
          {/* </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center px-4 gap-2">
          <Image
            src={"/users.svg"}
            height={52}
            width={52}
            className="size-9"
            alt="users"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </Button>
        </div>
      </header>

      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="w-64 bg-background h-full shadow-lg p-6 flex flex-col">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <div className="flex items-center gap-4">
                <Image
                  className="h-[40px] w-[23px]"
                  src={"/logo.svg"}
                  alt="logo"
                  height={100}
                  width={100}
                />
                <h1 className="lg:text-[24px] text-[18px] font-medium text-[#212121] dark:text-white">
                  Angry GPT
                </h1>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6 text-foreground" />
            </Button>
          </div>
          <nav className="mt-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31] text-[#212121] font-medium">
              Download Now
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
