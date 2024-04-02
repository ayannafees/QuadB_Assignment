import React, { useState } from "react"; // Import React library and useState hook
import { connect } from 'react-redux'; // Import connect function from react-redux library
import { addTodo, deleteTodo, toggleTodo } from '../actions/index'; // Import action creators
import removeIcon from "../assets/cancel.svg"; // Import remove icon
import toast, { Toaster } from "react-hot-toast"; // Import toast notifications

// Define ToDoList component
const ToDoList = ({ toDos, addTodo, deleteTodo, toggleTodo }) => {
  // Define state variables using useState hook
  const [addRow, setAddRow] = useState(false);
  const [toDoMessage, setToDoMessage] = useState("");

  // Function to hide add row
  const handleHide = () => {
    setAddRow(false);
  };

  // Function to show add row
  const handleAddRow = () => {
    setAddRow(true);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!toDoMessage) {
      toast.error("Please enter a to-do message");
      return;
    }

    addTodo({ id: Date.now(), todo: toDoMessage, completed: false });
    setToDoMessage("");
    setAddRow(false);
  };

  // Function to handle todo deletion
  const handleDelete = (id) => {
    deleteTodo(id);
    toast.success("To Do deleted successfully!");
  };

  // Function to handle todo completion
  const handleClick = (id) => {
    toggleTodo(id);
    toast.success("To Do marked as completed successfully!");
  };

  // Render the component
  return (
    <div className="m-4">
      <div className="flex justify-center items-center">
        <div className="flex gap-[5px] items-center mt-4 mb-2">
          <h1 className="text-2xl font-bold ">All To Do's</h1>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "m-8",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </div>
      </div>

      <table className="w-full">
        <thead className="w-full text-gray-primary bg-gray-table">
          <tr className="w-full border-b border-gray-200 bg-white text-black">
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-sm font-medium text-gray-700 uppercase tracking-wider">
              Sr. No.
            </th>
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-sm font-medium text-gray-700 uppercase tracking-wider">
              To Do
            </th>
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-sm font-medium text-gray-700 uppercase tracking-wider">
              Completed
            </th>
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Mark As Completed
            </th>
            <th className="px-5 py-3 border-b-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {/* Map through todos array and render each todo */}
          {toDos.map((data, index) => (
            <tr
              className="w-full border-b border-gray-200 hover:bg-gray-100"
              key={data.id}
            >
              <td className="px-5 py-3 bg-transparent text-sm">
                {index + 1}
              </td>
              <td className="px-5 py-3 bg-transparent text-sm">
                {data.todo}
              </td>
              <td className="px-5 py-3 bg-transparent text-sm">
                {data.completed ? "Completed" : "Not Completed"}
              </td>
              <td className="px-5 py-3 bg-transparent text-sm text-left">
                {data.completed ? (
                  "Task Completed"
                ) : (
                  <button
                    className="relative py-1 px-3 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                    onClick={() => handleClick(data.id)}
                  >
                    Mark as completed
                  </button>
                )}
              </td>
              <td
                className="hover:cursor-pointer"
                onClick={() => handleDelete(data.id)}
              >
                <img
                  src={removeIcon}
                  alt="remove"
                  className="w-5 h-5 object-contain relative"
                />
              </td>
            </tr>
          ))}

          {/* Render add row if addRow state is true */}
          {addRow && (
            <tr className="w-full border-b border-gray-200">
              <td className="px-5 py-3 bg-transparent text-sm">
                <button
                  className="relative py-1 px-3 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                  type="submit"
                  onClick={handleHide}
                >
                  Hide
                </button>
              </td>
              <td className="px-5 py-3 bg-transparent text-sm">
                <input
                  className="border text-left bg-white outline-none border-[#C8CEE1] bg-transparent rounded-lg py-2 px-3 w-full"
                  type="text"
                  name="To Do"
                  placeholder="Add To Do"
                  value={toDoMessage}
                  onChange={(e) => setToDoMessage(e.target.value)}
                />
              </td>
              <td className="px-5 py-3 bg-transparent text-sm">
                <button
                  className="relative py-1 px-3 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </td>
            </tr>
          )}
          {/* Render add row button if addRow state is false */}
          {!addRow && (
            <tr>
              <div
                className="cursor-pointer text-blue-400 flex items-start ml-4 gap-2"
                onClick={handleAddRow}
              >
                <span>Add More +</span>
              </div>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Map state to props to get todos from Redux store
const mapStateToProps = state => ({
  toDos: state.todos.todos,
});

// Map dispatch to props to dispatch actions to Redux store
const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
};

// Connect component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
