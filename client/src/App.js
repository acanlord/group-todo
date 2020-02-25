import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Todo from './components/pages/Todo/Todo.js';
import Calendar from './components/pages/Calendar/Calendar.js';
import Weather from './components/pages/Weather/Weather.js';

// import TodoList from './components/pages/TodoList/TodoList.js';
// import Blog from './components/pages/Blog/Blog.js';
// import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">To-Do-Ish!</h1>
          {/*v<h1 className="App-title">To-Do-Ish: Get sh*t done!</h1>*/}
          {/*<Link to="/">Welcome</Link>*/}
          <Link to="/todo/">To-Do-Ish</Link>
          <Link to="/calendar/">Calendar</Link>
          <Link to="/weather/">Weather</Link>
          {/* <Link to="/todolist/">TodoList</Link> */}
          {/* <Link to="/write/">Write Article</Link> */}
        </nav>


        <div className="App-mainContent">
          <Switch> 
            {/* <Route exact path='/' component={LandingPage} /> */}
            <Route exact path='/todo/' component={Todo} /> 
            <Route exact path='/calendar/' component={Calendar} />
            <Route exact path='/weather/' component={Weather} />
            {/* <Route exact path='/todolist/' component={TodoList} /> */}
            {/* <Route exact path='/write/' component={WriteArticle} /> */}
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
