// Define initial state for todos
const initialState = {
    todos: [], // Initialize todos array
};
  
// Define todoReducer function to handle todo related actions
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // Add a new todo to todos array
            return {
                ...state, // Maintain the existing state
                todos: [...state.todos, action.payload], // Add new todo to todos array
            };
        case 'DELETE_TODO':
            // Delete a todo from todos array based on id
            return {
                ...state, // Maintain the existing state
                todos: state.todos.filter(todo => todo.id !== action.payload), // Remove todo with specified id
            };
        case 'TOGGLE_TODO':
            // Toggle the completed status of a todo
            return {
                ...state, // Maintain the existing state
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ), // Update completed status of todo with specified id
            };
        default:
            // Return current state if action type doesn't match
            return state;
    }
};
  
export default todoReducer; // Export todoReducer function
