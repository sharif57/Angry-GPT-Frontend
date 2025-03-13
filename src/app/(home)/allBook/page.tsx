// "use client";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import Link from "next/link";

// // Book data
// const books = [
//   {
//     id: 1,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 2,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 3,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 4,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 5,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 6,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 7,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 8,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 9,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 10,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
//   {
//     id: 11,
//     title: "Killing Stalking Lola Season 1",
//     price: 22,
//     image: "/book.png",
//   },
// ];

// export default function AllBookStore() {
//   return (
//     <div>
//       <section className="py-8 sm:py-12 md:py-16 lg:py-24">
//         <div className="w-full container mx-auto px-4 sm:px-6">

//           <div>
//             <div className="relative w-[292px] mb-4">
//               <Input
//                 type="text"
//                 placeholder="Search Book"
//                 className="bg-[#F1F1F1] border text-black dark:bg-[F1F1F1] placeholder:text-gray-400 pr-10 pl-4 w-full"
//               />
//               <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-black" />
//               </div>
//             </div>
//           </div>

//           {/* Book Grid */}
//           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
//             {books.map((book) => (
//               <Link
//                 href={`allBook/${book.id}`}
//                 key={book.id}
//                 className="bg-card rounded-[20px] p-3 sm:p-4 transition-all hover:shadow-lg hover:translate-y-[-4px] bg-white dark:bg-white duration-300 border border-border/40"
//               >
//                 {/* Book Image */}
//                 <div className="relative aspect-[5/4] mb-3 sm:mb-4 rounded-md overflow-hidden">
//                   <Image
//                     src={book.image || "/placeholder.svg"}
//                     alt={book.title}
//                     fill
//                     className="object-cover object-center"
//                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                     priority={book.id <= 4}
//                   />
//                 </div>

//                 {/* Book Details */}
//                 <div className="space-y-2 sm:space-y-3">
//                   <h3 className="font-medium text-lg sm:text-xl md:text-[24px] line-clamp-2 text-[#4D4D4D] dark:text-[#4D4D4D]">
//                     {book.title}
//                   </h3>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-1">
//                       <h1 className="text-black text-base sm:text-[20px]">$</h1>
//                       <span className="text-xl sm:text-2xl md:text-[32px] font-semibold dark:text-black">
//                         {book.price}
//                       </span>
//                     </div>
//                     <Button
//                       size="sm"
//                       className="rounded-full bg-[#CAEA31] hover:bg-[#CAEA31]/90 text-[#1E1E1E] font-medium px-2 sm:px-4 h-8 sm:h-10 text-xs sm:text-sm transition-colors"
//                     >
//                       Buy Now
//                     </Button>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

// Book data
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

const ITEMS_PER_PAGE = 8; // Number of books per page

export default function AllBookStore() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);

  // Get books for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBooks = books.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="w-full container mx-auto px-4 sm:px-6">
          <div>
            <div className="relative w-[292px] mb-4">
              <Input
                type="text"
                placeholder="Search Book"
                className="bg-[#F1F1F1] border text-black dark:bg-[F1F1F1] placeholder:text-gray-400 pr-10 pl-4 w-full"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {currentBooks.map((book) => (
              <Link
                href={`allBook/${book.id}`}
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

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 mt-[100px]">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-none"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant="ghost"
                size="icon"
                className={`h-12 w-12 text-sm rounded-none ${
                  page === currentPage
                    ? "bg-[#CAEA31] text-black" // Selected page style
                    : " text-black bg-[#FAFDEA]" // Unselected page style
                }`}
                onClick={() => handlePageChange(page)}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Button>
            ))}

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-none"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
