export const addTodo = (todo) =>  ({ type: 'ADD_TODO', todo });

export const removeTodo = (index) => ({ type: 'REMOVE_TODO', index });

export const todos = () => ({type: 'SHOW_ALL'});