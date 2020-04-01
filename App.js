import React from "react"

import TodoData from "./TodoData"
import Todo from "./Todo"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos : TodoData,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }
    
    render() {
        const todoComponents = this.state.todos.map(item => <Todo handleChange={this.handleChange} key={item.id} details={item}/>)
        return (
            <div>
                {todoComponents}
            </div>
        )
    }
}

export default App