import React, { useEffect } from "react";
// import Users from "../components/Users";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Features/Users/userSlice";
import Users from "../components/Users";



const UsersTables = () => {
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  
  }, [dispatch]);

  // console.log(posts)

  return (
    <div className=" mx-4">
      <h1 className=" my-10 text-gray-800 font-semibold text-2xl ">Users</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Emial
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
     {
      users?.map((user)=>(
        <Users key={user.id} user={user} />
      ))
     }
        </table>
      </div>
    </div>
  );
};

export default UsersTables;
