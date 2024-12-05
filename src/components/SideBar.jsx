import React from "react";
import {
  FaUsers,
  FaCommentAlt,
  FaPhotoVideo,
  FaReact,
  FaBuffer,
  FaBookOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Task
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to={"/dashboard"}><a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="ms-3">Dashboard</span>
              </a></Link>
            </li>
            <li>
              <Link to={"/users"}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group hover:shadow-xl hover:shadow-grey-400/70 transition-all duration-300"
                >
                  <div className="p-2 bg-white rounded-lg shadow-md hover:bg-blue-500 group-hover:bg-blue-500">
                    <FaUsers
                      size={19}
                      className="text-gray-500 group-hover:text-white"
                    />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                    Users
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to={"/posts"}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group hover:shadow-xl hover:shadow-grey-400/70 transition-all duration-300"
                >
                  <div className="p-2 bg-white rounded-lg shadow-lg hover:bg-blue-500 group-hover:bg-blue-500">
                    <FaBookOpen
                      size={19}
                      className="text-gray-500 group-hover:text-white"
                    />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                    Posts
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to={"/comments"}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group hover:shadow-xl hover:shadow-grey-400/70 transition-all duration-300"
                >
                  <div className="p-2 bg-white rounded-lg shadow-md hover:bg-blue-500 group-hover:bg-blue-500">
                    <FaCommentAlt
                      size={19}
                      className="text-gray-500 group-hover:text-white"
                    />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                    Comments
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to={"/photos"}>
                {" "}
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group hover:shadow-xl hover:shadow-grey-400/70 transition-all duration-300"
                >
                  <div className="p-2 bg-white rounded-lg shadow-md hover:bg-blue-500 group-hover:bg-blue-500">
                    <FaPhotoVideo
                      size={19}
                      className="text-gray-500 group-hover:text-white"
                    />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                    Photos
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to={"/todos"}><a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group hover:shadow-xl hover:shadow-grey-400/70 transition-all duration-300"
              >
                <div className="p-2 bg-white rounded-lg shadow-md hover:bg-blue-500 group-hover:bg-blue-500">
                  <FaReact
                    size={19}
                    className="text-gray-500 group-hover:text-white"
                  />
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                  Todos
                </span>
              </a></Link>
            </li>
            <li>
              <Link to={"/albums"}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group hover:shadow-xl hover:shadow-grey-400/70 transition-all duration-300"
              >
                <div className="p-2 bg-white rounded-lg shadow-md hover:bg-blue-500 group-hover:bg-blue-500">
                  <FaBuffer
                    size={19}
                    className="text-gray-500 group-hover:text-white"
                  />
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                  Albums
                </span>
              </a></Link>
            </li>
          </ul>
        </div>
      </aside>

     
    </div>
  );
};

export default SideBar;
