import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import TodoItems from "../Todo/TodoItems.js";
 
import "react-datepicker/dist/react-datepicker.css";

import './Calendar.css';
class Calendar extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
      />
    );
  }
}
export default Calendar;
