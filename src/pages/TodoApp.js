import React, { useState, useId } from 'react';
import InputForm from '../components/InputForm';
import Todo from '../components/ListForm';
import ListForm from '../components/ListForm';
import '../maincss/TodoApp.css'

const TodoApp = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleChangeInput = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = () => {
    setTodos([...todos, { name: todo, status: false }]);
    setTodo('')
  }

  const handleKeypress = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleDeleteClick = (index) => {
    const list = todos.filter((a, i) => i !== index)
    setTodos(list)
  }

  const handleDoneClickProps = (index) => {
    const updatedTodos = todos.map((x, todoIndex) => todoIndex === index ? { ...x, status: true } : x)
    setTodos(updatedTodos)
  }
  // console.log('todos', todos)
  const handleNotDoneClickProps = (index) => {

  }


  return (
    <div className='todo-box'>
      <div className='todo-container'>
        <h1 className='todo-app'> Todo App</h1>
        <InputForm
          className='input-todo'
          value={todo}
          type='text'
          onChange={handleChangeInput}
          onKeyPress={handleKeypress}
          placeholder="What things you wanna do?"
          focus=""
        />
        <br />
        {todos.map((todo, index) => (
          <div key={index} className='list-box'>
            <div>{todo.name}
              <Todo
                value={todo}
                todoId={index}
                className={todo.status}
                handleDeleteClickProps={(value) => handleDeleteClick(value)}
                handleDoneClickProps={(value) => handleDoneClickProps(value)}
                handleNotDoneClickProps={(value) => handleNotDoneClickProps(value)}
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TodoApp
