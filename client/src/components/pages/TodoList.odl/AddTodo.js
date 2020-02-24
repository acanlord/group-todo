import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form>
                <input type="text" className="from-control rounded-0" placeholder="Enter Todo Items"/>
                <button className="form-control rounded-0" type="submit">Add Todo</button>
            </form>
        )
    }
}
