export const ADD_TODO = 'ADD_TODO'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: Math.random().toString(36).substr(2, 9),
      text: text,
      completed: false,
    },
  }
}
