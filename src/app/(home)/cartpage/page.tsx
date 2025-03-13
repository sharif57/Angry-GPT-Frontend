"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Cart item type
type CartItem = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  // Cart items state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "The Future of AI Conversations",
      author: "John Doe",
      price: 120.0,
      image: "/book.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "The Future of AI Conversations",
      author: "John Doe",
      price: 120.0,
      image: "/book.png",
      quantity: 1,
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Increment quantity
  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Update quantity directly
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle quantity input change
  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value)) {
      updateQuantity(id, value);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 min-h-screen mt-6">
      {/* Cart Header - Hidden on mobile, visible on tablets and up */}
      <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-500">
        <div className="col-span-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333] font-medium dark:text-white">
          Books
        </div>
        <div className="col-span-2 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333] font-medium dark:text-white">
          Quantity
        </div>
        <div className="col-span-2 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333] font-medium dark:text-white">
          Total
        </div>
        <div className="col-span-2 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333] font-medium dark:text-white">
          Remove
        </div>
      </div>

      {/* Mobile Header - Only visible on mobile */}
      <div className="sm:hidden pb-4 border-b">
        <h2 className="text-xl font-medium text-[#333333] dark:text-white">
          Your Cart
        </h2>
      </div>

      {/* Cart Items */}
      <div className="divide-y">
        {cartItems.map((item) => (
          <div key={item.id} className="py-4 sm:py-6">
            {/* Mobile Layout */}
            <div className="sm:hidden">
              <div className="flex gap-4 mb-4">
                <div className="bg-gray-100 rounded-lg p-2 w-24 h-32 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={80}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-medium text-base text-[#333333] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#333333] dark:text-white">
                      Author:{" "}
                      <span className="text-gray-700 dark:text-white">
                        {item.author}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-medium dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-red-500 p-1 h-auto"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="size-[24px] dark:text-white " />
                      {/* <Image src={'/Frame.svg'} height={50} width={50} alt="delete" className="size-[24px] bg-red-500" ></Image> */}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="inline-flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-l-md dark:text-white"
                    onClick={() => decrementQuantity(item.id)}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    // type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    className="w-12 h-9 text-center border-x focus:outline-none dark:text-white"
                    min="1"
                    aria-label="Quantity"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-r-md dark:text-white"
                    onClick={() => incrementQuantity(item.id)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tablet and Desktop Layout */}
            <div className="hidden sm:grid grid-cols-12 gap-4 items-center">
              <div className="col-span-6">
                <div className="flex gap-4">
                  <div className="bg-gray-100 rounded-lg p-2 w-20 h-28 md:w-24 md:h-32 lg:size-[144px] flex items-center justify-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={100}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-3">
                    <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#333333] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#333333] dark:text-white">
                      Author :{" "}
                      <span className="text-gray-700 dark:text-white">
                        {item.author}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 md:h-9 md:w-9"
                      onClick={() => decrementQuantity(item.id)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                    <input
                      //   type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                      className="w-10 md:w-12 h-8 md:h-9 text-center border-x focus:outline-none dark:text-white"
                      min="1"
                      aria-label="Quantity"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 md:h-9 md:w-9"
                      onClick={() => incrementQuantity(item.id)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium text-sm md:text-base lg:text-lg dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <div className="col-span-2 flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  <Trash2 className="size-[24px] dark:text-white " />
                  {/* <Image src={'/Frame.svg'} height={50} width={50} alt="delete" className="size-[24px] dark:bg-"></Image> */}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty cart message */}
      {cartItems.length === 0 && (
        <div className="py-8 sm:py-12 text-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-white">
            Your cart is empty
          </p>
        </div>
      )}

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="flex justify-center gap-2 sm:gap-4 items-center mb-2">
            <span className="text-[#4D4D4D] text-lg sm:text-xl md:text-2xl font-medium dark:text-[#BABABA]">
              Subtotal :
            </span>
            <span className="text-[#212121] text-lg sm:text-xl md:text-2xl font-medium dark:text-white">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center dark:text-[#BABABA]">
            Taxes and shipping calculated at checkout
          </p>
          <Link href={'/checkOut'}>
            <Button className="w-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 text-black font-medium rounded-full py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg">
              Checkout
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
