import React, { Component } from 'react'
import Todo from "./Todo"

export default class Todos extends Component {
    render() {
        return (
            <div>
               <Todo></Todo> 
               <Todo></Todo> 
               <Todo></Todo> 
            </div>
        )
    }
}
