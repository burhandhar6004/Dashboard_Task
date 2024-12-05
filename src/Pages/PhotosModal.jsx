import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../Features/photos/photosSlice";
import Pagination from "../components/Pagination";

const PhotosModal = () => {
  const { photos } = useSelector((state) => state.photos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const dispatch = useDispatch();

  const handleImageClick = (photoUrl) => {
    setSelectedPhoto(photoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  // Prevent errors if photos are undefined or not yet loaded
  if (!Array.isArray(photos)) {
    return (
      <div className="mx-4">
        <h1 className="my-10 text-gray-800 font-semibold text-2xl">Photos</h1>
        <p>Loading...</p>
      </div>
    );
  }

  // Calculate indices for current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-4">
      <h1 className="my-10 text-gray-800 font-semibold text-2xl">Photos</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Title</th>
            </tr>
          </thead>
          <tbody>
            {currentPhotos.length > 0 ? (
              currentPhotos.map((photo) => (
                <tr
                  key={photo.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 border rounded-full cursor-pointer"
                      src={photo.thumbnailUrl}
                      alt="Photo thumbnail"
                      onClick={() => handleImageClick(photo.url)} // Image click
                    />
                    <div className="pl-3">
                      <div className="px-6 py-4 break-words text-sm text-gray-900 dark:text-white">{photo.title}</div>
                    </div>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="1"
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No photos available.
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg relative max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full"
            >
              X
            </button>
            <img className="w-full h-auto" src={selectedPhoto} alt="Full-size photo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosModal;
