import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Todo from './components/pages/Todo/Todo.js';
import Blog from './components/pages/Blog/Blog.js';
import Todocopy from './components/pages/Todo/Todo.js';

// import TodoList from './components/pages/TodoList/TodoList.js';
// import Blog from './components/pages/Blog/Blog.js';
// import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">Just do it</h1>
          
          {/*<Link to="/">Welcome</Link>*/}
          <Link to="/todo/">Todo</Link>
          {/* <Link to="/todolist/">TodoList</Link> */}
          <Link to="/blog/">Blog</Link>
          {/* <Link to="/write/">Write Article</Link> */}
        </nav>
        <div>
        <h2 >To Do, when there's nothing else.</h2>
        </div>

        <div className="App-mainContent">
          <Switch> 
            {/* <Route exact path='/' component={LandingPage} /> */}
            <Route exact path='/todo/' component={Todo} /> 
            <Route exact path='/todocopy/' component={Todocopy} />
            {/* <Route exact path='/todolist/' component={TodoList} /> */}
            <Route exact path='/blog/' component={Blog} />
            {/* <Route exact path='/write/' component={WriteArticle} /> */}
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
