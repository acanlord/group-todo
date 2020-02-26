import React from "react"
  import TodoList from "./TodoList"
  import TodoItems from "./TodoItems"


  function TodoView() {
      return (
          <div>
              <TodoItems />
              <TodoList />
          </div>
      )
  }

export default TodoView