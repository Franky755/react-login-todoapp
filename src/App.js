import React, { useState } from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import Login from './pages/Login';
import TodoApp from './pages/TodoApp';
import SignUp from './pages/SignUp';
import '../src/maincss/App.css';

function App() {

  return (
    <>
      <div className="App">
        <div className='navi'>
          <nav className='router-url'>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/todoapp">TodoApp</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path='/' >
            <Login />
          </Route>
          <Route exact path='/todoapp' >
            <TodoApp />
          </Route>
          <Route exact path='/signup' >
            <SignUp />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
