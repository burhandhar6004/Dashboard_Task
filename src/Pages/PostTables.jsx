import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Features/posts/postsSlice";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Pagination from "../components/Pagination"; // Assuming the file name is "Pagination.js"

const PostTables = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // State to handle search query and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Fetch posts on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  // Function to handle filtered posts and pagination
  const getPaginatedPosts = () => {
    // Filter posts based on search query
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Get the posts for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return { currentPosts, totalPages };
  };

  const { currentPosts, totalPages } = getPaginatedPosts();

  // Handle page number click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous page click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mx-4">
      <div className="flex justify-between items-center flex-wrap">
  <h1 className="my-10 text-gray-800 font-semibold text-2xl w-full sm:w-auto">Posts</h1>
  <div className="pb-4 bg-white dark:bg-gray-900 w-full sm:w-auto">
    <label htmlFor="table-search" className="sr-only">
      Search
    </label>
    <div className="relative mt-1">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search"
        value={searchQuery}
        onChange={handleSearch}
        className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for posts"
      />
    </div>
  </div>
</div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          S.No
        </th>
        <th scope="col" className="px-6 py-3 ">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Body
        </th>
      </tr>
    </thead>
    <tbody>
      {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
          <tr
            key={post.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {post.id}
            </td>
            <td className="px-6 py-4 break-words text-sm text-gray-900 dark:text-white">
              {post.title}
            </td>
            <td className="px-6 py-4 break-words text-sm text-gray-900 dark:text-white">
              {post.body}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="3"
            className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
          >
            No posts available for the search.
          </td>
        </tr>
      )}
    </tbody>
  </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        paginate={paginate}
      />
    </div>
  );
};

export default PostTables;
