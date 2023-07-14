interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const showingFrom = indexOfFirstProduct + 1;
  const showingTo = Math.min(indexOfLastProduct, totalProducts);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; // Ignore invalid page numbers
    }
    paginate(pageNumber);
  };

  return (
    <nav>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{showingFrom}</span> to{" "}
          <span className="font-semibold">{showingTo}</span> of{" "}
          <span className="font-semibold">{totalProducts}</span> results
        </p>
        <div className="flex space-x-2">
          {/* Previous page button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Previous
          </button>
          {/* Page number buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-2 rounded-md ${
                  pageNumber === currentPage
                    ? "bg-gray-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          {/* Next page button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};
