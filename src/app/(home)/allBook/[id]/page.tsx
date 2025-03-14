"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Lock, Mail, MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Product data
const product = {
  title: "The Future of AI Conversations",
  description:
    "Explore the evolution of AI chat technology and how it transforms the way we communicate",
  author: "John Doe",
  price: 44.0,
  images: ["/book.png", "/mobiles.png", "/book.png", "/book.png"],
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`);
    setIsModalOpen(true);
  };

  const buyNow = () => {
    console.log(`Buying ${quantity} item(s) now`);
    // Here you would implement your checkout functionality
  };

  const books = [
    {
      id: 1,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 2,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 3,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 4,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 5,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 6,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 7,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 8,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 9,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 10,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
    {
      id: 11,
      title: "Killing Stalking Lola Season 1",
      price: 22,
      image: "/book.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 py-8 container mx-auto px-8">
        <div className="flex md:w-1/2">
          <div className="hidden sm:flex flex-col gap-4 mr-4">
            {product.images.slice(1).map((image, index) => (
              <div
                key={index}
                className={`size-[144px] border rounded cursor-pointer overflow-hidden ${
                  selectedImage === index + 1
                    ? "border-primary border-2"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index + 1)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product thumbnail ${index + 1}`}
                  width={100}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-[#EAEAEA] rounded-md p-4 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt="Product main image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:pl-10">
          <h1 className="text-3xl font-medium mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4 lg:w-3/4 dark:text-white">
            {product.description}
          </p>
          <p className="mb-6">
            <span className="text-gray-600 dark:text-white">Author:</span>{" "}
            {product.author}
          </p>

          <div className="text-2xl font-medium mb-6">
            ${product.price.toFixed(2)}
          </div>

          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={decrementQuantity}
              className="h-10 w-10"
            >
              <MinusIcon className="h-4 w-4" />
            </Button>

            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              className="h-10 w-12 mx-2 text-center border rounded"
            />

            <Button
              variant="outline"
              size="icon"
              onClick={incrementQuantity}
              className="h-10 w-10"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={addToCart}
              className="bg-[#CAEA31] text-black rounded-full text-[18px] py-[12px] px-[20px] font-medium hover:bg-[#CAEA31]"
            >
              Add To Cart
            </Button>

            <Button
              onClick={buyNow}
              variant="outline"
              className="border-black py-[12px] px-[20px] text-[18px] font-medium rounded-full dark:border-white"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="w-full container mx-auto px-4 sm:px-6">
          {/* Header */}
          <h1 className="text-[30px] font-medium text-black dark:text-white pb-8">
            Explore More
          </h1>
          {/* Book Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {books.slice(0, 4).map((book) => (
              <Link
                href={`/allBook/${book.id}`}
                key={book.id}
                className="bg-card rounded-[20px] p-3 sm:p-4 transition-all hover:shadow-lg hover:translate-y-[-4px] bg-white dark:bg-white duration-300 border border-border/40"
              >
                {/* Book Image */}
                <div className="relative aspect-[5/4] mb-3 sm:mb-4 rounded-md overflow-hidden">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={book.id <= 4}
                  />
                </div>

                {/* Book Details */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-medium text-lg sm:text-xl md:text-[24px] line-clamp-2 text-[#4D4D4D] dark:text-[#4D4D4D]">
                    {book.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <h1 className="text-black text-base sm:text-[20px]">$</h1>
                      <span className="text-xl sm:text-2xl md:text-[32px] font-semibold dark:text-black">
                        {book.price}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 text-[#1E1E1E] font-medium px-2 sm:px-4 h-8 sm:h-10 text-xs sm:text-sm transition-colors"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:w-[488px] p-0 overflow-hidden lg:px-[40px] lg:py-[80px] bg-[#1E1E1E] dark:bg-[#1E1E1E] text-white border-none">
          <div className="relative flex flex-col items-center p-6">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
          
            </button>

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
                <h1 className="lg:text-[24px] text-[18px] font-medium text-[#CAEA31] ">
                  Angry GPT
                </h1>
              </div>
            </div>

            {/* Login Form */}
            <form className="w-full space-y-4">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#CAEA31]" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 pl-10 "
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
              <div>
                <div className="flex justify-end mt-1">
                  <Link href="/forgotPass" className="text-xs text-[#CAEA31]">
                    Forgot password?
                  </Link>
                </div>
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
              <span className="px-3 text-sm text-gray-400">
                or, continue with
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4 space-y-4 w-full">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-white hover:bg-gray-800"
              >
                <Image
                  src="/Google logo.svg"
                  alt="Google"
                  width={24}
                  height={24}
                />
                <span className="sr-only">Continue with Google</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-white hover:bg-gray-800 "
              >
                <Image
                  src="/facebook logo.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className=""
                />
                <span className="sr-only">Continue with Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl border-gray-600 text-white hover:bg-gray-800 bg-black"
              >
                <Image src="/Vector.svg" alt="Apple" width={24} height={24} />
                <span className="sr-only">Continue with Apple</span>
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-sm text-center">
              <span className="text-gray-400">Dont have an account?</span>{" "}
              <Link  href="/signUp" className="text-[#CAEA31]">
                Sign Up
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
