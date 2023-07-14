"use client";

import { useState } from "react";
import products from "./_products.json";
import filters from "./_filters.json";
import { Filters } from "./_components/Filters";
import { Pagination } from "./_components/Pagination";
import { ProductCard } from "./_components/ProductCard";

export default function Catalog() {
  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({
    category: [],
    color: [],
    size: [],
  });

  // Handler for selecting a filter
  const handleFilterSelect = (filterType: string, filterValue: string) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: [...prevState[filterType], filterValue],
    }));
  };

  // Handler for deselecting a filter
  const handleFilterDeselect = (filterType: string, filterValue: string) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType].filter(
        (value) => value !== filterValue
      ),
    }));
  };

  // Handler for clearing all selected filters
  const handleClearFilters = () => {
    const clearedFilters = Object.keys(selectedFilters).reduce(
      (
        acc: {
          [key: string]: string[];
        },
        filterType: string
      ) => {
        acc[filterType] = [];
        return acc;
      },
      {}
    );

    setSelectedFilters(clearedFilters);
  };

  // Filtered products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (
      selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(product.category)
    ) {
      if (
        selectedFilters.color.length === 0 ||
        selectedFilters.color.includes(product.color)
      ) {
        if (
          selectedFilters.size.length === 0 ||
          selectedFilters.size.includes(product.size)
        ) {
          return true;
        }
      }
    }
    return false;
  });

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8">Catalog</h1>
      <p className="text-lg text-gray-500 mb-8">
        Discover our latest collection of custom t-shirts and find your perfect
        style.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0" />

      <div className="flex flex-col md:flex-row">
        {/* Filters Sidebar */}
        <div className="md:w-1/4 md:pr-4 mb-4 md:mb-0">
          <Filters
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterSelect={handleFilterSelect}
            handleFilterDeselect={handleFilterDeselect}
            handleClearFilters={handleClearFilters}
          />
        </div>
        <div className="md:w-3/4">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Product cards */}
            {currentProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6">
            {products.length > productsPerPage && (
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
