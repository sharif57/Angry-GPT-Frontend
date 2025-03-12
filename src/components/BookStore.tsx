import Image from "next/image"
import { Button } from "@/components/ui/button"

// Book data
const books = [
  {
    id: 1,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 2,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 3,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 4,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 5,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 6,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 7,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
  {
    id: 8,
    title: "Killing Stalking Lola Season 1",
    price: 22,
    image: "/placeholder.svg?height=280&width=200",
  },
]

export default function BookStore() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center  mb-16">
          <h2 className="text-3xl w-[800px] mx-auto md:text-4xl leading-[60px] lg:text-5xl font-bold mb-4">
            Discover Our Latest Book Unlock the Knowledge and Stories
          </h2>
          <p className="text-lg text-muted-foreground w-2/5 mx-auto">
            Browse through a range of exciting books and purchase your copy instantly. Dive into the world of
            literature!
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {books.map((book) => (
            <div key={book.id} className="bg-card rounded-lg p-4 transition-all hover:shadow-lg">
              {/* Book Image */}
              <div className="relative aspect-[3/4] mb-4 bg-muted rounded-md overflow-hidden">
                <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
              </div>

              {/* Book Details */}
              <div className="space-y-2">
                <h3 className="font-medium line-clamp-2">{book.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${book.price}</span>
                  <Button size="sm" className="rounded-full bg-lime-400 hover:bg-lime-500 text-black px-4">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col items-center gap-6">
          <Button variant="outline" className="rounded-full px-8">
            See All
          </Button>

          {/* Spotify Button */}
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] text-black px-6 py-3 rounded-full hover:bg-[#1ed760] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="font-medium">Listen Us on Spotify</span>
          </a>
        </div>
      </div>
    </section>
  )
}

