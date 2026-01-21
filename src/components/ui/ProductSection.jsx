import React, { useState } from "react";
import ProductCard from "./ProductCard";
import LoadingComponent from "./LoadingComponent";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductSection = ({
  products = [],
  Loading,
  title,
  totalPages,
  getPageMuchProducts,
}) => {
  // Add state to track current page
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPageMuchProducts(pageNumber, 8);
  };

  // Handle previous/next buttons
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      getPageMuchProducts(newPage, 8);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      getPageMuchProducts(newPage, 8);
    }
  };

  return (
    <>
      {Loading ? (
        <LoadingComponent />
      ) : products.length > 0 ? (
        <>
          <h1 className="font-bold text-2xl mb-4">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="text-center my-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={(e) => {
                      e.preventDefault();
                      handlePrevious();
                    }}
                    className={
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(pageNumber);
                        }}
                        className={`cursor-pointer ${
                          currentPage === pageNumber
                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white font-bold"
                            : ""
                        }`}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNext();
                    }}
                    className={
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      ) : (
        <p>No Products Found</p>
      )}
    </>
  );
};

export default ProductSection;
