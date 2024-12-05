import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../Features/comments/commentsSlice";
import Pagination from "../components/Pagination";

const CommentsTable = () => {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = comments.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(comments.length / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-4">
      <h1 className="my-10 text-gray-800 font-semibold text-2xl">Comments</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">S.No</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Comments</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.length > 0 ? (
              currentPosts.map((comment, index) => (
                <tr
                  key={comment.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {indexOfFirstPost + index + 1}
                  </td>
                  <td className="px-6 py-4 break-words text-sm text-gray-900 dark:text-white">
                    {comment.name}
                  </td>
                  <td className="px-6 py-4 break-words text-sm text-gray-900 dark:text-white">{comment.body}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No comments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
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

export default CommentsTable;
