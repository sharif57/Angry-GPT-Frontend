"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

// Product data
const product = {
  title: "The Future of AI Conversations",
  description: "Explore the evolution of AI chat technology and how it transforms the way we communicate",
  author: "John Doe",
  price: 44.0,
  images: [
    "/book.png",
    "/mobiles.png",
    "/book.png",
    "/book.png",
    
  ],
}

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const addToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`)
    // Here you would implement your cart functionality
  }

  const buyNow = () => {
    console.log(`Buying ${quantity} item(s) now`)
    // Here you would implement your checkout functionality
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8 container mx-auto">
      <div className="flex md:w-1/2">
        <div className="hidden sm:flex flex-col gap-4 mr-4">
          {product.images.slice(1).map((image, index) => (
            <div
              key={index}
              className={`w-16 h-20 border rounded cursor-pointer overflow-hidden ${selectedImage === index + 1 ? "border-primary border-2" : "border-gray-200"}`}
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
        <div className="flex-1 bg-gray-100 rounded-md p-4 flex items-center justify-center">
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

      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="mb-6">
          <span className="text-gray-600">Author:</span> {product.author}
        </p>

        <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>

        <div className="flex items-center mb-6">
          <Button variant="outline" size="icon" onClick={decrementQuantity} className="h-10 w-10">
            <MinusIcon className="h-4 w-4" />
          </Button>

          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            className="h-10 w-12 mx-2 text-center border rounded"
          />

          <Button variant="outline" size="icon" onClick={incrementQuantity} className="h-10 w-10">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button onClick={addToCart} className="bg-primary text-white hover:bg-primary/90">
            Add To Cart
          </Button>

          <Button onClick={buyNow} variant="outline">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}