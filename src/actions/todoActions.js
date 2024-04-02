// Action creator function to add a new todo
export const addTodo = todo => ({
  type: 'ADD_TODO', // Action type
  payload: todo, // Data payload containing the todo
});

// Action creator function to delete a todo
export const deleteTodo = id => ({
  type: 'DELETE_TODO', // Action type
  payload: id, // Data payload containing the todo id to be deleted
});

// Action creator function to toggle the completed status of a todo
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO', // Action type
  payload: id, // Data payload containing the todo id to be toggled
});
