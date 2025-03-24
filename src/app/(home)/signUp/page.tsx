// "use client";
// import React from "react";
// import { useState } from "react";
// import Image from "next/image";
// import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { useRegisterMutation } from "@/redux/feature/authSlice";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [register] = useRegisterMutation();
//   const router = useRouter();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };


//   const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const userData = {
//         name,
//         email,
//         password,
//       };

//       const response = await register(userData).unwrap();
//       console.log("Signup successful:", response);
//       toast(response.message);
//       router.push("/emailVerify");

//       // Optionally, you can redirect the user to another page after successful signup
//       // router.push("/emailVerify");
//     } catch (err) {
//       console.error("Signup failed:", err);
//     }
//   };
  

//   return (
//     <div className=" mx-auto h-screen flex items-center justify-center ">
//       <div className="relative flex flex-col items-center p-6 bg-[#1E1E1E] rounded-lg">
//         {/* Close button */}
//         <button
//           //   onClick={() => setIsModalOpen(false)}
//           className="absolute right-4 top-4 text-gray-400 hover:text-white"
//         ></button>

//         {/* Logo */}
//         <div className="flex items-center mb-6">
//           <div className="flex items-center gap-4 mb-4">
//             <Image
//               className="h-[40px] w-[23px]"
//               src={"/logo.svg"}
//               alt="logo"
//               height={100}
//               width={100}
//             />
//             <h1 className="lg:text-[24px] text-[18px] font-medium text-[#CAEA31] ">
//               Angry GPT
//             </h1>
//           </div>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSignUp} className="w-full space-y-4">
//           <div>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-[#CAEA31]" />
//               </div>
//               <Input
//                 type="name"
//                 placeholder="Enter your name..."
//                 className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 "
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           </div>
//           <div>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-[#CAEA31]" />
//               </div>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 "
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//               <Lock className="h-5 w-5 text-[#CAEA31]" />
//             </div>
//             <Input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               className="bg-transparent border-gray-600  text-white placeholder:text-gray-400 pl-10 pr-10"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               type="button"
//               variant="ghost"
//               size="sm"
//               className="absolute inset-y-0 right-0 px-3 flex items-center justify-center hover:bg-transparent focus:ring-0 focus:ring-offset-0"
//               onClick={togglePasswordVisibility}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? (
//                 <EyeOff className="h-5 w-5 text-gray-400 hover:text-white" />
//               ) : (
//                 <Eye className="h-5 w-5 text-gray-400 hover:text-white" />
//               )}
//             </Button>
//           </div>

//           {/* <Link href={"/emailVerify"}> */}
//           <Button
//             type="submit"
//             className="w-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 mt-4 text-black font-medium rounded-full"
//           >
//             Sign Up
//           </Button>
//           {/* </Link> */}
//         </form>

//         {/* Sign Up Link */}
//         <div className="mt-6 text-sm text-center">
//           <span className="text-gray-400">Already have an account? </span>{" "}
//           <Link href="/signUp" className="text-[#CAEA31]">
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/redux/feature/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
      };

      const response = await register(userData).unwrap();
      console.log("Signup successful:", response);
      toast.success(response.message); // Show success toast
      // router.push("/emailVerify"); // Redirect to email verification page
      router.push(`/emailVerify?email=${email}`) // Pass email to OTP page

    } catch (err: unknown) {
      console.error("Signup failed:", err);
      if ((err as { status: number }).status === 409) {
        toast.error("User already exists. Please use a different email." ); // Show error toast for conflict
      } else {
        toast.error( "Signup failed. Please try again."); // Show generic error toast
      }
    }
  };

  return (
    <div className="mx-auto h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center p-6 bg-[#1E1E1E] rounded-lg">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        ></button>

        {/* Logo */}
        <div className="flex items-center mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Image
              className="h-[40px] w-[23px]"
              src={"/logo.svg"}
              alt="logo"
              height={100}
              width={100}
            />
            <h1 className="lg:text-[24px] text-[18px] font-medium text-[#CAEA31]">
              Angry GPT
            </h1>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignUp} className="w-full space-y-4">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-[#CAEA31]" />
              </div>
              <Input
                type="name"
                placeholder="Enter your name..."
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#CAEA31]" />
              </div>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-[#CAEA31]" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 pr-10"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute inset-y-0 right-0 px-3 flex items-center justify-center hover:bg-transparent focus:ring-0 focus:ring-offset-0"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-white" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-white" />
              )}
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 mt-4 text-black font-medium rounded-full"
          >
            Sign Up
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-sm text-center">
          <span className="text-gray-400">Already have an account? </span>{" "}
          <Link href="/" className="text-[#CAEA31]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}