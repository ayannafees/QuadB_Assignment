import { combineReducers } from 'redux'; // Import combineReducers function from redux library
import todoReducer from './todoReducer'; // Import todoReducer from todoReducer file

// Combine reducers into a single rootReducer
const rootReducer = combineReducers({
  todos: todoReducer, // Assign todoReducer to 'todos' key in the combined reducers object
});

export default rootReducer; // Export the rootReducer
