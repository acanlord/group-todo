import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <h3 className="text-doNotTrack.text-ClientRect.p-1.bg-light">
            <i className="far.fa-times-circle.fa-sm float-left m-1 text-danger"></i>Task
            <input type="checkbox" className="m-2 float-right"/>
            </h3>
        )
    }
}
