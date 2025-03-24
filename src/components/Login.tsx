// 'use client'
// import Image from "next/image";
// import React, { useState } from "react";
// import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import { useLoginMutation } from "@/redux/feature/authSlice";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// export default function Login() {
//   const [, setIsModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const router = useRouter()
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const [login] =useLoginMutation()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     try {
//       const response = await login({
//         email,
//         password,
//       }).unwrap()

//       console.log(response)

//       if (response.success) {
//         // Save tokens and user data to localStorage and cookies
//         localStorage.setItem("token", response?.data?.token)

//         localStorage.setItem("user", JSON.stringify(response?.data?.user))

//         // Show success toast notification
//         toast.success("Login Successful!", {
//           autoClose: 1500,
//         })

//         // Check if the user has a gender field
//         if (!response?.data?.user?.gender) {
//           // Redirect to the details page if gender is missing
//           setTimeout(() => {
//             router.push("/")
//           }, 1500) // Redirect after 1.5 seconds
//         } else {
//           // Redirect to the home page if gender is present
//           setTimeout(() => {
//             router.push("/")
//           }, 1500) // Redirect after 1.5 seconds
//         }
//       } else {
//         toast.error(response.message || "Invalid credentials!")
//       }
//     } catch (error: unknown) {
//       console.error("Login error:", error)
//       if (
//         error &&
//         typeof error === "object" &&
//         "data" in error &&
//         typeof error.data === "object" &&
//         error.data &&
//         "message" in error.data
//       ) {
//         toast.error((error.data as { message: string }).message || "Something went wrong. Try again!")
//       } else {
//         toast.error("Something went wrong. Try again!")
//       }
//     }
//   }

//   return (
//     <div>
//       <div className="relative flex flex-col items-center p-6">
//         {/* Close button */}
//         <button
//           onClick={() => setIsModalOpen(false)}
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
//         <form onSubmit={handleSubmit} className="w-full space-y-4">
//           <div>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-[#CAEA31]" />
//               </div>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 "
//                 required
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
//               className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 pr-10"
//               required
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
//           <div>
//             <div className="flex justify-end mt-1">
//               <Link href="/forgotPass" className="text-xs text-[#CAEA31]">
//                 Forgot password?
//               </Link>
//             </div>
//           </div>
//           <Button
//             type="submit"
//             className="w-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 mt-4 text-black font-medium rounded-full"
//           >
//             Login
//           </Button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center w-full my-4">
//           <div className="flex-grow border-t border-gray-600"></div>
//           <span className="px-3 text-sm text-gray-400">or, continue with</span>
//           <div className="flex-grow border-t border-gray-600"></div>
//         </div>

//         {/* Social Login Buttons */}
//         <div className="flex justify-center space-x-4 space-y-4 w-full">
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full border-gray-600 text-white hover:bg-gray-800"
//           >
//             <Image src="/Google logo.svg" alt="Google" width={24} height={24} />
//             <span className="sr-only">Continue with Google</span>
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full border-gray-600 text-white hover:bg-gray-800 "
//           >
//             <Image
//               src="/facebook logo.svg"
//               alt="Facebook"
//               width={24}
//               height={24}
//               className=""
//             />
//             <span className="sr-only">Continue with Facebook</span>
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-2xl border-gray-600 text-white hover:bg-gray-800 bg-black"
//           >
//             <Image src="/Vector.svg" alt="Apple" width={24} height={24} />
//             <span className="sr-only">Continue with Apple</span>
//           </Button>
//         </div>

//         {/* Sign Up Link */}
//         <div className="mt-6 text-sm text-center">
//           <span className="text-gray-400">Dont have an account?</span>{" "}
//           <Link href="/signUp" className="text-[#CAEA31]">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  useGoogleLoginMutation,
  useLoginMutation,
} from "@/redux/feature/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from "react-facebook-login";

export default function Login() {
  // const [, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [login] = useLoginMutation();
  const [googleLogin] = useGoogleLoginMutation();
  // const [facebookLogin] =useFacebookLoginMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();

      if (response.success) {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("user", JSON.stringify(response?.data?.user));

        toast.success("Login Successful!", { autoClose: 1500 });

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast.error(response.message || "Invalid credentials!");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Try again!"
      );
    }
  };

  // const handleGoogleSuccess = async (credentialResponse: { credential: string | undefined }) => {
  //   try {

  //     if (!credentialResponse.credential) {
  //       throw new Error('No credential received');
  //     }
  //     const decoded = jwtDecode(credentialResponse.credential);
  //     console.log("Google login success:", decoded);
  //     localStorage.setItem("user", JSON.stringify(decoded));

  //     // Here you would typically send the Google credential to your backend
  //     // for verification and user creation/login
  //     // Example:
  //     // const response = await handleGoogleAuth(credentialResponse.credential);

  //     console.log(decoded)

  //     toast.success("Google login successful!");
  //     router.push("/");

  //   } catch (error) {
  //     console.error("Google login error:", error);
  //     toast.error("Google login failed. Please try again.");
  //   }
  // };

  // const handleGoogleSuccess = async (credentialResponse: {
  //   credential?: string;
  // }) => {
  //   try {
  //     if (!credentialResponse.credential) {
  //       throw new Error("No credential received from Google");
  //     }

  //     // Decode the JWT to get user info
  //     const decoded: any = jwtDecode(credentialResponse.credential);
  //     console.log("Google login success:", decoded);

  //     // Send the credential to your backend
  //     const response = await googleLogin({
  //       token: credentialResponse.credential,
  //       user: {
  //         email: decoded.email,
  //         name: decoded.name,
  //         avatar: decoded.picture,
  //         uid: decoded.aud,
  //       },
  //     }).unwrap();

  //     if (response.success) {
  //       localStorage.setItem("token", response?.data?.token);
  //       localStorage.setItem("user", JSON.stringify(response?.data?.user));
  //       toast.success("Google login successful!");
  //       router.push("/");
  //     } else {
  //       toast.error(response.message || "Google login failed");
  //     }
  //   } catch (error: any) {
  //     console.error("Google login error:", error);
  //     toast.error(
  //       error?.data?.message || "Google login failed. Please try again."
  //     );
  //   }
  // };
  interface GoogleJwtPayload {
    email: string;
    name: string;
    picture?: string;
    sub: string;
  }

  const handleGoogleSuccess = async (credentialResponse: {
    credential?: string;
  }) => {
    try {
      if (!credentialResponse.credential) {
        throw new Error("No credential received from Google");
      }

      // Decode the JWT to get user info
      const decoded: GoogleJwtPayload = jwtDecode(
        credentialResponse.credential
      );
      console.log("Google user info:", decoded);

      // Ensure all required fields are present
      if (!decoded.email || !decoded.name) {
        throw new Error("Google account missing required information");
      }

      // Prepare user data for backend
      const userData = {
        email: decoded.email,
        name: decoded.name,
        avatar: decoded.picture || "/default-avatar.png",
        uid: decoded.sub,
      };
      console.log(userData);

      // Send to backend
      const response = await googleLogin(userData).unwrap();
      console.log(response);

      if (response.success) {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        toast.success("Google login successful!");
        router.push("/");
      } else {
        toast.error(response.message || "Google login failed");
      }
    } catch (error: unknown) {
      console.error("Google login error:", error);
      toast.error(
        error &&
          typeof error === "object" &&
          "data" in error &&
          typeof error.data === "object" &&
          error.data &&
          "message" in error.data
          ? (error.data as { message: string }).message
          : error instanceof Error
          ? error.message
          : "Google login failed. Please try again."
      );
    }
  };

  const handleGoogleError = () => {
    console.log("Google login failed");
    toast.error("Google login failed. Please try again.");
  };

  const handleResponse = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    console.log("Facebook Response:", response);
    if ('accessToken' in response) {
      // Handle successful login
      console.log(response);
    } else {
      // Handle login failure
      console.error('Facebook login failed:', response);
    }
  };


  return (
    <div className="relative flex flex-col items-center p-6">
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
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-[#CAEA31]" />
          </div>
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-[#CAEA31]" />
          </div>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 pr-10"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute inset-y-0 right-0 px-3 flex items-center justify-center hover:bg-transparent"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-white" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-white" />
            )}
          </Button>
        </div>

        <div className="flex justify-end">
          <Link href="/forgotPass" className="text-xs text-[#CAEA31]">
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 mt-4 text-black font-medium rounded-full"
        >
          Login
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center w-full my-4">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="px-3 text-sm text-gray-400">or, continue with</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex justify-center space-x-4 w-full ">
          <div className="w-[40px] h-[40px] overflow-hidden">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              shape="pill"
              theme="filled_black"
              size="large"
              text="continue_with"
              // width="300"
            />
          </div>
      

          <FacebookLogin
            appId={process.env.NEXT_PUBLIC_API_KEY_FACEBOOK || ''}
            autoLoad={false}
            callback={handleResponse}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 bg-white text-white hover:bg-gray-800 w-[40px] h-[40px]"
              >
                <Image
                  src="/facebook logo.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Button>
            )}
          />
          

          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-600 text-white hover:bg-gray-800 bg-black w-[40px] h-[40px]"
          >
            <Image src="/Vector.svg" alt="Apple" width={24} height={24} />
          </Button>
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="mt-6 text-sm text-center">
        <span className="text-gray-400">Dont have an account?</span>{" "}
        <Link href="/signUp" className="text-[#CAEA31]">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
