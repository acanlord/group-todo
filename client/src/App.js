import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Todo from './components/pages/Todo/Todo.js';
import Calendar from './components/pages/Calendar/Calendar.js';
import Weather from './components/pages/Weather/Weather.js';
import todoImage from './todo.png';
import calendarImage from './calendar.png';
import weatherImage from './weather.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">To-Do-ish!</h1>
          {/*v<h1 className="App-title">To-Do-Ish: Get sh*t done!</h1>*/}
          {/*<Link to="/">Welcome</Link>*/}
          <Link to="/todo/"><img className="photo" src={todoImage} /></Link>
          <Link to="/calendar/"><img className="photo" src={calendarImage} /></Link>
          <Link to="/weather/"><img className="photo" src={weatherImage} /></Link>
        </nav>


        <div className="App-mainContent">
          <Switch> 
            {/* <Route exact path='/' component={LandingPage} /> */}
            <Route exact path='/todo/' component={Todo} /> 
            <Route exact path='/calendar/' component={Calendar} />
            <Route exact path='/weather/' component={Weather} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
