export const addTodo = (todo) =>  ({ type: 'ADD_TODO', todo });

export const removeTodo = (todo) => ({ type: 'REMOVE_TODO', todo });

export const todos = () => ({type: 'SHOW_ALL'});