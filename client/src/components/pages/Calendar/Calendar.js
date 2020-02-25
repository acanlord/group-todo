import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Calendar.css';
class Calendar extends Component {
  render() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default Calendar;
