import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './pages/Login';
import TodosApp from './pages/TodosApp';
import SignUp from './pages/SignUp';
import '../src/css/App.css';

function App() {

  return (
    <>
      <div className="App">
        <div className='navi'>
          <nav className='router-url'>
            <ul className='router-url-ul'>
              <li className='router-url-li'>
                <Link to="/">Login</Link>
              </li>
              <li className='router-url-li'>
                <Link to="/todosapp">Todos App</Link>
              </li>
              <li className='router-url-li'>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path='/' >
            <Login />
          </Route>
          <Route exact path='/todosapp' >
            <TodosApp />
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
