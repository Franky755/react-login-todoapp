import React from 'react';
import '../maincss/ListForm.css'

const Todo = ({ todoId, handleDeleteClickProps, handleDoneClickProps, handleNotDoneClickProps }) => {

  return (
    <div>
      <button className={todo.status} onClick={() => handleDeleteClickProps(todoId)}>Delete</button>
      <button onClick={() => handleDoneClickProps(todoId)}>Done</button>
      <button onClick={() => handleNotDoneClickProps(todoId)}>Not</button>
    </div>
  )
}

export default Todo
