import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uid } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";


import InputForm from '../components/InputForm';
import '../maincss/TodoApp.css'

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState({ hits: [] });
  const id = uid(); //create a unique ID

  // Call API faker Job List
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/todos',
      );

      setTodos([result.data[0], result.data[1], result.data[2], result.data[3]])
      setSearchData([result.data[0], result.data[1], result.data[2], result.data[3]])
      // setTodos(result.data)
      // setSearchData(result.data)
    }
    fetchData();
  }, []);

  const handleChangeInput = (event) => {
    setTodo(event.target.value)
  }

  //thêm 1 hàm useEffect để set lại State của biến searchData theo dependances là "todos"

  useEffect(() => {
    // console.log(todos && Array.isArray(todos) && todos.length > 0)
    // console.log(searchData)
    if (todos && Array.isArray(todos))
      setSearchData(todos?.filter(x => x.title?.includes(searchText)))
  }, [todos]) // xử lý vấn đề dữ liệu khởi tạo là undefined => render ra rỗng

  const handleSearching = () => {
    // console.log(searchText)
    setSearchData(todos.filter(x => x.title?.includes(searchText)))
  }

  const handleSubmit = (e) => {
    // console.log(todos)
    if (todo.length === 0) {
      alert('There is nottodohing to add!');
    }
    else {
      setTodos([...todos, { id: id, title: todo, completed: 'not-done' }])
      setTodo('')
    }
  }

  const handleKeypress = e => {
    if (e.key === 'Enter' && todo.length !== 0) {
      handleSubmit();
    }
  };

  const handleDeleteClick = (idPram) => {
    const list = todos.filter((a, i) => a.id !== idPram)
    // console.log(idPram)
    setTodos(list || '')
  }

  const handleMarkedDone = (idPram) => {
    setTodos(todos.map((todo, i) => {
      if (idPram === todo.id) {
        return { ...todo, completed: todo.completed === 'done' ? 'not-done' : 'done' }
      } else {
        return todo
      }
    }))
  }

  // console.log(searchData)

  return (
    <div className='todo-box'>
      <div className='todo-container'>
        <h1 className='todo-app'> Todo App</h1>
        <span className='welcome-user'> Welcome, {localStorage.getItem('Email')}! </span>

        {/* input todo */}
        <InputForm
          className='input-todo'
          icon={
            <FontAwesomeIcon
              icon={faDragon}
              className='fa-beat'
            >
            </FontAwesomeIcon>
          }
          value={todo}
          type='text'
          onChange={handleChangeInput}
          onKeyPress={handleKeypress}
          placeholder="What things you wanna do?"
          focus=""
          required=''
        />
        <br />
        <div className='line-split'></div>
        <br />

        {/* search function */}
        <div className='search-box'>

          <InputForm
            label="Search box"
            className='input-search'
            type='text'
            onChange={e => setSearchText(e.target.value)}
            onKeyPress={handleKeypress}
            placeholder="Searching your task..."
          />
          <button
            className='btn-search'
            onClick={handleSearching}
          >
            <FontAwesomeIcon
              icon={faDragon}
              className='fa-beat'
            >
            </FontAwesomeIcon>
            Search
          </button>
        </div>
        <br />

        {/* Todo list */}
        <h4>{todos && todos.length ? '' : 'No plan...'}</h4>
        <div className='list-box'>
          {searchData.map((todo, i) => (
            <div
              className={`list ${todo.completed === 'done' ? 'list-hide' : ''}`}
              key={i}
            >
              <div className={`todo-status ${todo.completed === 'done' ? 'strike' : ''}`}>{todo.title}
              </div>
              <button
                className={todo.completed === 'done' ? 'done' : 'not-done'}
                onClick={() => handleMarkedDone(todo.id)}
              >
                {todo.completed === 'done' ? 'Done' : 'Not yet'}
              </button>
              <button className='delete'
                onClick={() => handleDeleteClick(todo.id)}
              >
                Delete
              </button>
            </div>

          ))}
        </div>
      </div>
    </div >
  )
}

export default TodoApp
