"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useParams, useRouter } from "next/navigation";
import {
  useAllBooksGetQuery,
  useBooksDetailGetQuery,
} from "@/redux/feature/bookSlice";
import Login from "@/components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { toast } from "react-toastify";

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface User {
  avatar: string;
  name: string;
  email: string;
  picture: string;
}

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const id = params?.id;
  // console.log(id, "id");
  const router= useRouter()

  const { data } = useBooksDetailGetQuery(id);
  // console.log(data?.data, "books");
  const { data: allBook } = useAllBooksGetQuery({
    limit: 4,
    state: "published",
  });

  const singleBook = data?.data;

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };


  const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      // This code will only run on the client side
      const data = localStorage.getItem("user");
      if (data) {
        setUser(JSON.parse(data));
      }
    }, []);
  

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  // const addToCart = () => {
  //   console.log(`Added ${quantity} item(s) to cart`);
  //   setIsModalOpen(true);
  // };

  // const buyNow = () => {
  //   console.log(`Buying ${quantity} item(s) now`);
  //   // Here you would implement your checkout functionality
  // };
  const addToCart = () => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }
    
    console.log(`Added ${quantity} item(s) to cart`);
    // Optional: Show success toast
    toast.success(`${quantity} item(s) added to cart`);
  };

  
  const buyNow = () => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }
    console.log(`Buying ${quantity} item(s) now`);
    // Optional: Show success toast and redirect to checkout
    toast.success(`Proceeding to checkout with ${quantity} item(s)`);
    router.push('/cartpage');
  };

  const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 py-8 container mx-auto px-8">
        <div className="flex md:w-1/2">
          {/* Thumbnails for additional images (hidden if there's only one image) */}
          {singleBook?.images?.length > 1 && (
            <div className="hidden sm:flex flex-col gap-4 mr-4">
              {singleBook.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className={`size-[144px] border rounded cursor-pointer overflow-hidden ${
                    selectedImage === index
                      ? "border-primary border-2"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={`${IMAGE}/${image}` || "/placeholder.svg"}
                    alt={`Product thumbnail ${index + 1}`}
                    width={100}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Main image display */}
          <div className="flex-1 bg-[#EAEAEA] rounded-md p-4 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src={
                  `${IMAGE}/${singleBook?.images[selectedImage]}` ||
                  "/placeholder.svg"
                }
                alt="Product main image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:pl-10">
          <h1 className="text-3xl font-medium mb-2">{singleBook?.title}</h1>
          <p className="text-gray-600 mb-4 lg:w-3/4 dark:text-white">
            {singleBook?.description}
          </p>
          <p className="mb-6">
            <span className="text-gray-600 dark:text-white">Author:</span>{" "}
            {singleBook?.author}
          </p>

          <div className="text-2xl font-medium mb-6">
            ${singleBook?.price.toFixed(2)}
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
            {allBook?.data.map((book: Book) => (
              <Link
                href={`/allBook/${book._id}`}
                key={book._id}
                className="bg-card rounded-[20px] p-3 sm:p-4 transition-all hover:shadow-lg hover:translate-y-[-4px] bg-white dark:bg-white duration-300 border border-border/40"
              >
                {/* Book Image */}
                <div className="relative aspect-[5/4] mb-3 sm:mb-4 rounded-md overflow-hidden">
                  <Image
                    src={`${IMAGE}/${book.images[0]}` || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    // priority={book._id <= 4}
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
          <GoogleOAuthProvider  clientId={process.env.NEXT_PUBLIC_API_KEY_Client_ID || ''}>
            <Login></Login>
          </GoogleOAuthProvider>
        </DialogContent>
      </Dialog>

    </div>
  );
}
