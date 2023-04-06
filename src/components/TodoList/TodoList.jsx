import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
  const todos = useSelector((state) => state.todos)

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default TodoList
