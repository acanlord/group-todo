import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"


 class TodoList extends React.Component {
     constructor() {
         super()
         this.state = {
             todos: TodosData
             
         }
         this.handleChange = this.handleChange.bind(this)
     }

     handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            console.log(prevState.todos)
            console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    } 

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
        handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}


export default TodoList 