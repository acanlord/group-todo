import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    todoItems: [],
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    console.log('Fetching data from API');
    fetch('/api/mongodb/todo/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back, Fetch', data);
        this.setState({
          todoItems: data,
        });
      });
  }

  deleteTask(taskId) {
    console.log('Sending DELETE for', taskId);
    // Do the DELETE, using "?_id=" to specify which document we are deleting
    fetch('/api/mongodb/todo/?_id=' + taskId, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        this.fetchPosts();
      });
  }


  render() {
    return (
      <div className="Todo">
        <h1>Task List</h1>
        {
          this.state.todoItems.map((post, index) => (
            <div className="Todo-Items" key={post._id}>

              <h1>{post.title}</h1>
              <p>{post.text}</p>

              <div className="Todo-Actions">
                <div onClick={() => this.deleteTask(post._id)}>
                  <span alt="delete this">🗑</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TodoList;

