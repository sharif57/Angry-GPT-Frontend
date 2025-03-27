"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { useEffect, useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  title: string;
  author: string;
  image: string;
}

interface User {
  avatar: string;
  name: string;
  email: string;
  picture: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("buy");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setCartItems(Array.isArray(parsedData) ? parsedData : [parsedData]);
      } catch (error) {
        console.error("Error parsing cart data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // This code will only run on the client side
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal; // You can add shipping costs here if needed

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8 min-h-screen">Loading...</div>
    );
  }
  const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <div className="container mx-auto px-6 py-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="space-y-8">
          {/* Checkout Section */}
          <div>
            <h2 className="text-2xl font-medium text-[#333333] mb-6 dark:text-white">
              Checkout
            </h2>
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Email/Phone"
                  className="w-full rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
                  defaultValue={user?.email}
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="newsletter"
                  className="border-black dark:border-white"
                />
                <Label
                  htmlFor="newsletter"
                  className="text-sm text-gray-600 dark:text-white"
                >
                  E-mail me with news & offers
                </Label>
              </div>
            </div>
          </div>

          {/* Delivery Section */}
          <div>
            <h2 className="text-2xl font-medium text-[#333333] mb-6 dark:text-white">
              Delivery
            </h2>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Country region"
                className="rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
              />

              <div className="">
                <Input
                  type="text"
                  placeholder="Your name"
                  className="rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
                  defaultValue={user?.name}
                />
              </div>

              <Input
                type="text"
                placeholder="Address"
                className="rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
              />

              <Input
                type="text"
                placeholder="Apartment (optional)"
                className="rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Postal code"
                  className="rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
                />
                <Input
                  type="text"
                  placeholder="City"
                  className="rounded-md py-[14px] border-[#4D4D4D] dark:border-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="save-info"
                  className="border-black dark:border-white"
                />
                <Label
                  htmlFor="save-info"
                  className="text-sm text-gray-600 dark:text-white"
                >
                  Save this information for the next time
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:pl-8">
          <div className="rounded-lg p-6 space-y-6">
            {/* Order Items */}
            <div className="space-y-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.productId} className="flex items-center gap-4">
                    <div className="relative w-[102px] h-[92px] bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={`${IMAGE}${item.image}` || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-0 right-0 bg-[#FFA135] text-xs  w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-grow space-y-2">
                      <h3 className="text-base font-medium text-[#333333] dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-white">
                        Author:{" "}
                        <span className="text-gray-700 dark:text-white">
                          {item.author}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-medium dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-white">
                  Your cart is empty
                </p>
              )}
            </div>

            {/* Summary */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-base">
                <span className="text-gray-600 dark:text-white">
                  Subtotal (
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                  items)
                </span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-base">
                <span className="text-gray-600 dark:text-white">Shipping</span>
                <span className="text-gray-600 dark:text-white">
                  Enter shipping address
                </span>
              </div>
              <div className="flex justify-between text-lg font-medium pt-2 border-t">
                <span>Total</span>
                <div className="text-right flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-white">
                    USD
                  </span>
                  <span className="ml-1">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Pay Now Button */}
            <Button
              className="w-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 text-black font-normal rounded-full py-6 text-[20px]"
              disabled={cartItems.length === 0}
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
