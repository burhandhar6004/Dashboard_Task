import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Features/posts/postsSlice";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CommentSection = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // console.log(posts)

  const filteredPost = posts.filter((post) => post.userId === parseInt(id));

  // console.log(filteredPost)
  return (
    <div>
      <div className=" mx-4">
        <div className="flex gap-10 items-center ">
         <Link to={"/users"}><div className="  p-2 rounded-full shadow-xl"> <FaArrowLeft size={20} /></div></Link>

          <h1 className=" my-10 text-gray-800 font-semibold text-2xl ">
            Posts Section : UserID - {id}
          </h1>
        </div>

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
                  Posts
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPost.length > 0 ? (
                filteredPost.map((post) => (
                  <tr
                    key={post.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {post.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {post.title}
                    </th>
                    <td className="px-6 py-4">{post.body}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No comments available for this user.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
