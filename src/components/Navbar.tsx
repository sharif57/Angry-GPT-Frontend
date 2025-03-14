// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// import { ThemeToggle } from "./ui/theme-toggle";
// import Image from "next/image";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className=" sticky top-0 z-50">
//       <header className="mx-auto max-w-[1580px] px-6 lg:px-12 py-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center justify-between gap-2 w-[754px]">
//           <div className="flex items-center gap-4">
//             <Image
//               className="h-[40px] w-[23px]"
//               src={"/logo.svg"}
//               alt="logo"
//               height={100}
//               width={100}
//             ></Image>
//             <h1 className="text-[24px] font-medium text-[#212121] dark:text-white">
//               Angry GPT
//             </h1>
//           </div>
//           <nav className="hidden md:flex items-center gap-8">
//             <Link
//               href="/"
//               className="text-[18px] font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               href="/feature"
//               className="text-[18px] font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Feature
//             </Link>
//             <Link
//               href="/how-it-works"
//               className="text-[18px] font-medium text-foreground hover:text-primary transition-colors"
//             >
//               How it Works
//             </Link>
//             <Button
//               variant="outline"
//               size="lg"
//               className="rounded-full border-[#B8D52D] flex items-center justify-between gap-2  text-foreground transition-colors duration-300"
//             >
//               <Image
//                 className="size-[24px]"
//                 src={"/bag-2.svg"}
//                 height={100}
//                 width={100}
//                 alt="bag"
//               ></Image>

//               <span>Shop</span>
//             </Button>
//           </nav>
//         </div>

//         {/* Desktop Navigation */}

//         {/* Actions */}
//         <div className="flex items-center gap-3">
//           <Button className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31]  dark:bg-[#CAEA31] dark:hover:bg-[#CAEA31] text-[#212121] font-medium">
//             Download Now
//           </Button>

//           {/* Theme Toggle - Visible on desktop */}
//           <div className="hidden md:block">
//             <ThemeToggle />
//           </div>

//           {/* Dropdown Menu
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <ChevronDown className="h-5 w-5 text-foreground transition-colors duration-300" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-56">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Help & Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <div className="px-2 py-1.5">
//                 <p className="text-sm mb-2">Theme</p>
//                 <div className="flex items-center justify-between gap-2">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() =>
//                       document.documentElement.classList.remove("dark")
//                     }
//                     className="w-full justify-start"
//                   >
//                     <Sun className="h-4 w-4 mr-2" />
//                     Light
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() =>
//                       document.documentElement.classList.add("dark")
//                     }
//                     className="w-full justify-start"
//                   >
//                     <Moon className="h-4 w-4 mr-2" />
//                     Dark
//                   </Button>
//                 </div>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu> */}
//         </div>

//         {/* Mobile Menu Button - Only visible on small screens */}
//         <div className="md:hidden flex items-center gap-2">
//           {/* Theme Toggle - Visible on mobile */}
//           <ThemeToggle />

//           <Button
//             variant="ghost"
//             size="sm"
//             className="p-1"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <span
//               className={`block h-0.5 w-6 bg-current transition duration-300 ${
//                 mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-6 bg-current transition duration-300 mt-1.5 ${
//                 mobileMenuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-6 bg-current transition duration-300 mt-1.5 ${
//                 mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//               }`}
//             />
//           </Button>
//         </div>

//         {/* Mobile Navigation - Only visible when menu is open */}
//         {mobileMenuOpen && (
//           <div className="absolute top-16 left-0 right-0 bg-background border-b border-border/40 p-4 md:hidden z-50 shadow-md transition-colors duration-300">
//             <nav className="flex flex-col space-y-4">
//               <Link
//                 href="/"
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/feature"
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Feature
//               </Link>
//               <Link
//                 href="/how-it-works"
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 How it Works
//               </Link>
//             </nav>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full ">
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
            <Link
              href="/"
              className="text-[18px] font-medium text-[#4D4D4D]  dark:text-[#FFFFFF]  hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              href="/"
              className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
            >
              Feature
            </Link>
            <Link
              href="/"
              className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
            >
              How it Works
            </Link>
            <Link href="/allBook" className="rounded-full">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#B8D52D] flex items-center gap-2 transition-colors duration-300 bg-[#CAEA31] dark:bg-transparent text-[#212121] dark:text-white"
              >
                <Image
                  className="size-[24px] "
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
        <div className="flex items-center gap-3 justify-between">
          <Image
            src={"/users.svg"}
            height={52}
            width={52}
            className="size-9 hidden sm:block"
            alt="users"
          ></Image>
          <ThemeToggle />
          <Link href={"/cartpage"}>
            <Button className="rounded-full hidden sm:block bg-[#CAEA31] hover:bg-[#CAEA31] text-[#212121] font-medium">
              Download Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center px-4 gap-2">
          {/* <ThemeToggle /> */}
          <Image
            src={"/users.svg"}
            height={52}
            width={52}
            className="size-9 "
            alt="users"
          ></Image>

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
        className={`fixed inset-0  bg-opacity-50 z-50 transform ${
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
            <Link
              href="/"
              className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/feature"
              className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Feature
            </Link>
            <Link
              href="/how-it-works"
              className="text-[18px] font-medium text-[#4D4D4D] dark:text-[#FFFFFF] hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Button className="rounded-full bottom-0 top-0  bg-[#CAEA31] hover:bg-[#CAEA31] text-[#212121] font-medium">
              Download Now
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
