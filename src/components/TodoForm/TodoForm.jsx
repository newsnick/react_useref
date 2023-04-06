import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './action'

function TodoForm() {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputRef.current.value)
    dispatch(addTodo(inputRef.current.value))
    setNewTodo('')
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">Add New Todo</button>
    </form>
  )
}

export default TodoForm
