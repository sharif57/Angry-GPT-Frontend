import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function myProfile() {
  return (
    <div className="container mx-auto lg:px-24 px-2  h-screen lg:mt-[100px] mt-[50px]">
        <h1 className="text-[20px] font-medium pb-8">Account Details</h1>
      <div className="flex  items-center gap-4 ">
        <Image
          src="/profile.png"
          height={100}
          width={100}
          alt="profile"
        ></Image>
        <div>
          <h1 className="text-[24px] font-medium">Johan Smaith</h1>
          <p>info123@gmail.com</p>
        </div>
      </div>
      <div className="space-y-6 mt-8 lg:w-[940px]">
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            placeholder="Enter name"
            readOnly
            className="dark:border-white border-black py-[10px] placeholder-black dark:placeholder-[#ffffff]"
          />
        </div>
        <div className="space-y-4">
          <Label>Phone Number</Label>
          <Input
            placeholder="Phone Number"
            readOnly
            className="dark:border-white border-black py-[10px] text-white placeholder-black dark:placeholder-[#ffffff]"
          />
        </div>
        <Link href={`/editprofile`} className="flex justify-end mt-12">
            <Button className="text-black bg-[#CAEA31] px-20 py-[10px] rounded-full hover:text-white hover:dark:text-black">Edit </Button>
        </Link>
      </div>
      
    </div>
  );
}
