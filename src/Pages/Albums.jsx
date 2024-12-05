import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../Features/albums/albumsSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Albums = () => {
  const { albums } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Customize this value as needed

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAlbums = albums.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(albums.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-4">
      <h1 className="my-10 text-gray-800 font-semibold text-2xl">Albums</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentAlbums.length > 0 ? (
              currentAlbums.map((album) => (
                <tr
                  key={album.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >

<th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {album.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {album.title}
                  </th>
                  <td className="px-6 py-4">
                    <Link to={`/viewphotos/${album.id}`}><button className="text-blue-500 hover:underline">
                      View
                    </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No albums available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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

export default Albums;
