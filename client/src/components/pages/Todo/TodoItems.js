import React, { Component } from 'react';
// import "./TodoItems.css"

class TodoItems extends Component {
  state = {
    title: '',
    text: '',
  }

  onChangeContent = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  }

  onChangeTitle = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }

  submit = () => {
    const formData = {
      title: this.state.title,
      text: this.state.text,
    };

    fetch('/api/mongodb/todo/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back, from Todo', data);
          
        // Redirect to /todo, broken need to fix this for App Refresh 
        // this.props.history.push('/todo/');
      });
  }


  render() {
    return (
      <div className="EnterTask">
        <h1>Eneter a task</h1>
        <input
            name="TaskList"
            placeholder="Task"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        <br />

        <button onClick={this.submit}>Add Tasks</button>
      </div>

    );
  }
}

export default TodoItems;
