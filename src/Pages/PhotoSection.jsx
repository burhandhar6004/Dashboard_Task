import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchPhotos } from '../Features/photos/photosSlice';
import { FaArrowLeft } from 'react-icons/fa';
import Pagination from '../components/Pagination';

const PhotoSection = () => {
  const { id } = useParams();
  const { photos } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10); 
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const filteredAlbums = photos.filter((photo) => photo.albumId === parseInt(id));

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredAlbums.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mx-4">
        <div className="flex gap-10 items-center">
          <Link to={"/albums"}>
            <div className="p-2 rounded-full shadow-xl">
              <FaArrowLeft size={20} />
            </div>
          </Link>
          <h1 className="my-10 text-gray-800 font-semibold text-2xl">
            Photos Section: AlbumID - {id}
          </h1>
        </div>

        {currentPhotos.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {currentPhotos.map((album) => (
                <div key={album.id}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={album.url}
                    alt={`Album ${album.id}`}
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredAlbums.length / photosPerPage)}
              paginate={paginate}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            No photos available.
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoSection;
