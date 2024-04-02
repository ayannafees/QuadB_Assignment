import { createStore } from 'redux'; // Import createStore function from redux library
import rootReducer from '../reducers'; // Import rootReducer

// Load state from localStorage, if available
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')) // Parse stored state from localStorage
  : {}; // Initialize as empty object if no state is stored

// Create Redux store with rootReducer and persistedState
const store = createStore(rootReducer, persistedState);

// Subscribe to store changes and save state to localStorage
store.subscribe(() => {
  // Save current state to localStorage
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store; // Export the Redux store
