import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../Features/todos/todosSlice';
import Pagination from '../components/Pagination';

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Calculate indices for current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Pagination logic
  const totalPages = Math.ceil(todos.length / todosPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const displayPageNumbers = pageNumbers.slice(
    Math.max(currentPage - 3, 0),
    currentPage + 2
  );

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
      <h1 className="my-10 text-gray-800 font-semibold text-2xl">Todos</h1>

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
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTodos.length > 0 ? (
              currentTodos.map((todo) => (
                <tr
                  key={todo.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                   <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {todo.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {todo.title}
                  </th>
                  <td className="px-6 py-4">
                    {todo.completed ? 'Completed' : 'Pending'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No Todos available.
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

export default Todos;
