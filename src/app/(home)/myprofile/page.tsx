/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface User {
  avatar: string;
  name: string;
  email: string;
  picture: string;
}
export default function MyProfile() {
  // const data = localStorage.getItem("user");
  // const user = data ? JSON.parse(data) : null;
  // console.log(user);

  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // This code will only run on the client side
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

  const handleLogout = () => {
    try {
      // Remove items from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Show success message
      toast.success("You have been logged out successfully!", {
        autoClose: 1000,
      });
      router.push("/");

      // Optional: Redirect to login page or home page
      // router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Failed to logout properly. Please try again.");
    }
  };

  return (
    <div className="container mx-auto lg:px-24 px-2  h-screen lg:mt-[100px] mt-[50px]">
      <h1 className="text-[20px] font-medium pb-8">Account Details</h1>
      <div className="flex justify-between items-center lg:w-[940px]">
        <div className="flex  items-center gap-4 ">
          <img
            src={`${IMAGE}${user?.avatar}`}
            alt="User Avatar"
            className="rounded-full"
            height={100}
            width={100}
          />

          <div>
            <h1 className="text-[24px] font-medium">{user?.name}</h1>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <Button
            onClick={handleLogout}
            className="text-white bg-[#f33b0c] px-16 py-[10px] rounded-full hover:text-white hover:dark:text-black"
          >
            LogOut
          </Button>
        </div>
      </div>
      <div className="space-y-6 mt-8 lg:w-[940px]">
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            placeholder="Enter name"
            readOnly
            className="dark:border-white border-black py-[10px] placeholder-black dark:placeholder-[#ffffff]"
            defaultValue={user?.name}
          />
        </div>
        <div className="space-y-4">
          <Label>Email</Label>
          <Input
            placeholder="Enter email"
            defaultValue={user?.email}
            readOnly
            className="dark:border-white border-black py-[10px] text-white placeholder-black dark:placeholder-[#ffffff]"
          />
        </div>
        <Link href={`/editprofile`} className="flex justify-end mt-12">
          <Button className="text-black bg-[#CAEA31] px-20 py-[10px] rounded-full hover:text-white hover:dark:text-black">
            Edit{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}
