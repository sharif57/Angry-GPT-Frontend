// 'use client'
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import React from "react";

// export default function editProfile() {
//   const data = localStorage.getItem("user");
//   const user = data ? JSON.parse(data) : null;
//   console.log(user);
//   const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

//   return (
//     <div className="container mx-auto lg:px-24 px-2  h-screen lg:mt-[100px] mt-[50px]">
//         <h1 className="text-[20px] font-medium pb-8">Account Details</h1>
//       <div className="flex  items-center gap-4 ">
//         <Image
//           src={`${IMAGE}${user?.avatar}`}
//           height={100}
//           width={100}
//           alt="profile"
//           className="rounded-full"
//         ></Image>
//         <div>
//           <h1 className="text-[24px] font-medium">{user?.name}</h1>
//           <p>{user?.email}</p>
//         </div>
//       </div>
//       <div className="space-y-6 mt-8 lg:w-[940px]">
//         <div className="space-y-4">
//           <Label>Name</Label>
//           <Input
//             placeholder="Enter name"
//             className="dark:border-white border-black py-[10px] placeholder-black dark:placeholder-[#ffffff]"
//             defaultValue={user?.name}
//           />
//         </div>
//         <div className="space-y-4">
//           <Label>Email</Label>
//           <Input
//             placeholder="Enter email"
//             className="dark:border-white border-black py-[10px] text-white placeholder-black dark:placeholder-[#ffffff]"
//             defaultValue={user?.email}

//           />
//         </div>
//         <div className="flex justify-end mt-12">
//             <Button className="text-black bg-[#CAEA31] px-20 py-[10px] rounded-full hover:text-white hover:dark:text-black">Save Change </Button>
//         </div>
//       </div>

//     </div>
//   );
// }

// 'use client'
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useUpdateProfileMutation } from "@/redux/feature/userSlice";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// interface User {
//   avatar: string;
//   name: string;
//   email: string;
// }

// export default function EditProfile() {
//   const [user, setUser] = useState<User | null>(null);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const data = localStorage.getItem("user");

//     if (data) {
//       setUser(JSON.parse(data));
//     }
//   }, []);

//   const IMAGE = process.env.NEXT_PUBLIC_API_KEY;
//   const [updateProfile]=useUpdateProfileMutation()

//   if (!user) {
//     return <div className="text-center">Loading...</div>;
//   }

//   const onFinish = async (values: any) => {
//     try {
//       const formData = new FormData();
//       const jsonData = JSON.stringify({
//         name: values.name,
//       });

//       formData.append("data", jsonData);
//       if (imageFile) {
//         formData.append("image", imageFile);
//       }

//       console.log("Sending formData:", [...formData.entries()]);

//       const response = await updateProfile(formData).unwrap();
//       console.log("Update response:", response);

//       toast.success(response.message || "Profile updated successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       // ✅ Redirect to "/profile" after update
//       setTimeout(() => router.push("/profile"), 3000);
//     } catch (error) {
//       console.error("Update profile error:", error);
//       toast.error("Failed to update profile. Please try again.", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto lg:px-24 px-2 h-screen lg:mt-[100px] mt-[50px]">
//       <h1 className="text-[20px] font-medium pb-8">Account Details</h1>
//       <div className="flex items-center gap-4">
//         <Image
//           src={`${IMAGE}${user?.avatar}`}
//           height={100}
//           width={100}
//           alt="profile"
//           className="rounded-full"
//         />
//         <div>
//           <h1 className="text-[24px] font-medium">{user?.name}</h1>
//           <p>{user?.email}</p>
//         </div>
//       </div>
//       <div className="space-y-6 mt-8 lg:w-[940px]">
//         <div className="space-y-4">
//           <Label>Name</Label>
//           <Input
//             placeholder="Enter name"
//             className="dark:border-white border-black py-[10px] placeholder-black dark:placeholder-[#ffffff]"
//             defaultValue={user?.name}
//           />
//         </div>
//         <div className="space-y-4">
//           <Label>Email</Label>
//           <Input
//             placeholder="Enter email"
//             className="dark:border-white border-black py-[10px] text-white placeholder-black dark:placeholder-[#ffffff]"
//             defaultValue={user?.email}
//             readOnly
//           />
//         </div>
//         <div className="flex justify-end mt-12">
//           <Button className="text-black bg-[#CAEA31] px-20 py-[10px] rounded-full hover:text-white hover:dark:text-black">
//             Save Change
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProfileMutation } from "@/redux/feature/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface User {
  avatar: string;
  name: string;
  email: string;
  picture: string;
}

export default function EditProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      const parsedData = JSON.parse(data);
      setUser(parsedData);
      setName(parsedData.name);
    }
  }, []);

  const IMAGE = process.env.NEXT_PUBLIC_API_KEY;
  const [updateProfile] = useUpdateProfileMutation();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onFinish = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      if (imageFile) {
        formData.append("images", imageFile);
      }

      const response = await updateProfile(formData).unwrap();
      console.log("Update response:", response);
      localStorage.setItem("user", JSON.stringify(response?.data));

      
      toast.success(response.message || "Profile updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => router.push("/myprofile"), 3000);
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error("Failed to update profile. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  if (!user) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto lg:px-24 px-2 h-screen lg:mt-[100px] mt-[50px]">
      <h1 className="text-[20px] font-medium pb-8">Account Details</h1>
      <div className="flex items-center gap-4">
        <label htmlFor="image-upload" className="cursor-pointer">
          <Image
            // src={imagePreview || `${IMAGE}${user?.avatar} || ${IMAGE}${user?.picture}`}
            src={ imagePreview || ` ${IMAGE}${user?.avatar} ` .trim()}
            alt="profile"
            className="rounded-full size-[100px]"
            height={100}
            width={100}
          />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <div>
          <h1 className="text-[24px] font-medium">{user?.name}</h1>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="space-y-6 mt-8 lg:w-[940px]">
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            placeholder="Enter name"
            className="dark:border-white border-black py-[10px] placeholder-black dark:placeholder-[#ffffff]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-4">
          <Label>Email </Label>
          <Input
            placeholder="Enter email"
            className="dark:border-white border-black py-[10px] text-black dark:text-white placeholder-black dark:placeholder-[#ffffff]"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="flex justify-end mt-12">
          <Button
            className="text-black bg-[#CAEA31] px-20 py-[10px] rounded-full hover:text-white hover:dark:text-black"
            onClick={onFinish}
          >
            Save Change
          </Button>
        </div>
      </div>
    </div>
  );
}
