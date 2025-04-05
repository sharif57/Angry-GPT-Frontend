// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, ChevronRight, ChevronLeft } from "lucide-react";
// import Link from "next/link";
// import { useAllBooksGetQuery } from "@/redux/feature/bookSlice";

// interface Book {
//   _id: string;
//   title: string;
//   author: string;
//   description: string;
//   price: number;
//   stock: number;
//   images: string[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export default function AllBookStore() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { data } = useAllBooksGetQuery({ limit: 100, state: "published" });

//   const pagination = data?.meta?.pagination;
//   const totalPages = pagination?.totalPage || 1; // Use totalPage from meta.pagination

//   // Handle page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

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
//             {data?.data.map((book: Book) => (
//               <Link
//                 href={`allBook/${book._id}`}
//                 key={book._id}
//                 className="bg-card rounded-[20px] p-3 sm:p-4 transition-all hover:shadow-lg hover:translate-y-[-4px] bg-white dark:bg-white duration-300 border border-border/40"
//               >
//                 {/* Book Image */}
//                 <div className="relative aspect-[5/4] mb-3 sm:mb-4 rounded-md overflow-hidden">
//                   <Image
//                     src={`${IMAGE}/${book.images[0]}` || "/placeholder.svg"}
//                     alt={book.title}
//                     fill
//                     className="object-cover object-center"
//                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                     // priority={book._id <= 4}
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

//           {/* Pagination Controls */}
//           <div className="flex items-center justify-center gap-2 mt-[100px]">
//             {/* Previous Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-12 w-12 rounded-none"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               aria-label="Previous page"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>

//             {/* Page Number Buttons */}
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <Button
//                 key={page}
//                 variant="ghost"
//                 size="icon"
//                 className={`h-12 w-12 text-sm rounded-none ${
//                   page === currentPage
//                     ? "bg-[#CAEA31] text-black" // Selected page style
//                     : " text-black bg-[#FAFDEA]" // Unselected page style
//                 }`}
//                 onClick={() => handlePageChange(page)}
//                 aria-current={page === currentPage ? "page" : undefined}
//               >
//                 {page}
//               </Button>
//             ))}

//             {/* Next Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-12 w-12 rounded-none"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage >= totalPages}
//               aria-label="Next page"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </Button>
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
import { useAllBooksGetQuery } from "@/redux/feature/bookSlice";

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

const ITEMS_PER_PAGE = 8;

export default function AllBookStore() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useAllBooksGetQuery({ limit: 100, state: "published" });
  
  // Filter books based on search term
  const filteredBooks = (data?.data || []).filter((book: Book) => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const IMAGE = process.env.NEXT_PUBLIC_API_KEY;

  // Generate page numbers with ellipsis for large page counts
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);
      
      if (leftBound > 1) pages.push(1);
      if (leftBound > 2) pages.push("...");
      
      for (let i = leftBound; i <= rightBound; i++) {
        pages.push(i);
      }
      
      if (rightBound < totalPages - 1) pages.push("...");
      if (rightBound < totalPages) pages.push(totalPages);
    }
    
    return pages;
  };

  if (isLoading) {
    return <div className="text-center py-20">Loading books...</div>;
  }

  return (
    <div>
      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="w-full container mx-auto px-4 sm:px-6">
          {/* Search Input */}
          <div className="relative w-full max-w-[292px] mb-4">
            <Input
              type="text"
              placeholder="Search by title or author"
              className="bg-[#F1F1F1] border text-black dark:bg-[F1F1F1] placeholder:text-gray-400 pr-10 pl-4 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-black" />
            </div>
          </div>

          {/* Book Grid */}
          {currentBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg">No books found matching your search</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                {currentBooks.map((book: Book) => (
                  <Link
                    href={`allBook/${book._id}`}
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
                      />
                    </div>

                    {/* Book Details */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="font-medium text-lg sm:text-xl md:text-[24px] line-clamp-2 text-[#4D4D4D] dark:text-[#4D4D4D]">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        by {book.author}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <h1 className="text-black text-base sm:text-[20px]">$</h1>
                          <span className="text-xl sm:text-2xl md:text-[32px] font-semibold dark:text-black">
                            {book.price.toFixed(2)}
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
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 mt-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 "
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  {getPageNumbers().map((page, index) => (
                    typeof page === "number" ? (
                      <Button
                        key={page}
                        variant="ghost"
                        size="icon"
                        className={`h-10 w-10 text-sm  ${
                          page === currentPage
                            ? "bg-[#CAEA31] text-black font-bold"
                            : "text-black bg-[#FAFDEA]"
                        }`}
                        onClick={() => handlePageChange(page)}
                        aria-current={page === currentPage ? "page" : undefined}
                      >
                        {page}
                      </Button>
                    ) : (
                      <span key={`ellipsis-${index}`} className="px-2">...</span>
                    )
                  ))}

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 "
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}