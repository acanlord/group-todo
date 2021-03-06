import React from "react"
  import TodoList from "./TodoList"
  import TodoItems from "./TodoItems"


  function TodoView(props) {
      return (
          <div>
              <TodoItems history={props.history} />
              <TodoList />
          </div>
      )
  }

export default TodoView