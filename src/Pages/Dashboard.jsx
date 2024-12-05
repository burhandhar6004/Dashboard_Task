import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../Features/albums/albumsSlice";
import { fetchComments } from "../Features/comments/commentsSlice";
import { fetchPhotos } from "../Features/photos/photosSlice";
import { fetchPosts } from "../Features/posts/postsSlice";
import { fetchTodos } from "../Features/todos/todosSlice";
import { fetchUsers } from "../Features/Users/userSlice";
import { Link } from "react-router-dom";
import { FaBookOpen, FaBuffer, FaCommentAlt, FaPhotoVideo, FaReact, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const { users } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const { todos } = useSelector((state) => state.todos);
  const { albums } = useSelector((state) => state.albums);
  const { photos } = useSelector((state) => state.photos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchComments());
    dispatch(fetchPhotos());
    dispatch(fetchPosts());
    dispatch(fetchTodos());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <Link to={"/users"}>
            <div className="relative flex items-center justify-center h-24 w-72 rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 shadow-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out">
              <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-5 drop-shadow-sm">
              <FaUsers /> Users {users.length}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent dark:from-black/10 dark:to-transparent blur-lg"></div>
            </div>
          </Link>

          <Link to={"/posts"}>
            <div className="relative flex items-center justify-center h-24 w-72 rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 shadow-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out">
              <p className="text-3xl font-semibold flex items-center justify-center gap-5 text-gray-800 dark:text-gray-100 drop-shadow-sm">
              <FaBookOpen/>  Posts {posts.length}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent dark:from-black/10 dark:to-transparent blur-lg"></div>
            </div>
          </Link>

          <Link to={"/comments"}>
            {" "}
            <div className="relative flex items-center justify-center h-24 w-72 rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 shadow-xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out">
              <p className="text-3xl flex items-center justify-center gap-5  font-semibold text-gray-800 dark:text-gray-100 drop-shadow-sm">
               <FaCommentAlt/> Comments {comments.length}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent dark:from-black/10 dark:to-transparent blur-lg"></div>
            </div>
          </Link>
        </div>

        <Link to={"/photos"}>
          {" "}
          <div className="relative flex items-center justify-center h-48 mb-4 rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 shadow-2xl transform hover:scale-[1.05] transition-all duration-500 ease-in-out">
            <p className="text-3xl flex items-center justify-center gap-5 font-semibold text-gray-800 dark:text-gray-200 drop-shadow-lg z-10">
              <FaPhotoVideo/>Photos {photos.length}
            </p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-black/10 dark:from-white/5 dark:to-black/20 blur-lg"></div>
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-4 mb-4">
         <Link to={"/todos"}>
         <div className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 shadow-2xl transform hover:scale-[1.05] transition-all duration-500 ease-in-out h-28">
            <p className="text-2xl flex items-center justify-center gap-5 font-semibold text-gray-800 dark:text-gray-200 drop-shadow-lg z-10">
            <FaReact/>  Todos {todos.length}
            </p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-black/10 dark:from-white/5 dark:to-black/20 blur-lg"></div>
          </div></Link>

          <Link to={"/albums"}>
          <div className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 shadow-2xl transform hover:scale-[1.05] transition-all duration-500 ease-in-out h-28">
            <p className="text-2xl flex items-center justify-center gap-5 font-semibold text-gray-800 dark:text-gray-200 drop-shadow-lg z-10">
              <FaBuffer/> Albums {albums.length}
            </p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-black/10 dark:from-white/5 dark:to-black/20 blur-lg"></div>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
