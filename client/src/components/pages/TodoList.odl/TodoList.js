import React from 'react';
// import './App.css'
import Header from "./TodoList"
import AddTodo from "./AddTodo"
import Todos from "./Todos"

function TodoList() {
    return (
        <div className="app-container">
        <header></header>
        <Header></Header>
        <AddTodo></AddTodo>
        <Todos></Todos>
        </div>
    );
}

export default TodoList;