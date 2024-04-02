import React from "react"; // Import React library
import { Provider } from "react-redux"; // Import Provider component from react-redux library
import store from "./store"; // Import Redux store
import ToDoList from "./components/ToDoLists"; // Import ToDoList component

function App() {
  return (
    <Provider store={store}> {/* Provide Redux store to the entire application */}
      <div className="App"> {/* Main container for the application */}
        <ToDoList /> {/* Render ToDoList component */}
      </div>
    </Provider>
  );
}

export default App; // Export the App component
