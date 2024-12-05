import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext,
  paginate,
}) => {
  const displayPageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).slice(
    Math.max(currentPage - 3, 0),
    Math.min(currentPage + 2, totalPages)
  );

  return (
    <div className="flex justify-center  h-14 rounded-2xl shadow-2xl items-center  mt-4">
      <nav className="inline-flex space-x-2">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 shadow-xl rounded-full bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          disabled={currentPage === 1}
        >
          <FaArrowLeft size={15} />
        </button>

        {displayPageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 text-sm font-medium shadow-xl rounded-full ${
              number === currentPage
                ? "bg-blue-500 text-white"
                : "text-gray-500 dark:text-gray-400 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400  rounded-full shadow-xl bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          disabled={currentPage === totalPages}
        >
          <FaArrowRight size={15} />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
