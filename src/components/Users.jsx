import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({user}) => {




  return (
    <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.id}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
               City : {user.address.city} <br />
               Street : {user.address.street}</td>

              <td className="px-6 py-4">
               <Link to={`/viewcomments/${user.id}`}> <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  
                >
                  View
                </a></Link>
              </td>
            </tr>
          </tbody>
  )
}

export default Users
