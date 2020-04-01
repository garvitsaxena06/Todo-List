import React from "react"

function Todo(props) {
    const styles = {
        fontStyle : "italic",
        color : "#C0C0C0",
        textDecoration : "line-through",
    }
    return (
        <div>
            <input type="checkbox" checked={props.details.completed} onChange={() => props.handleChange(props.details.id)}/>
            <h3 style={props.details.completed ? styles : null}>{props.details.text}</h3>
            <hr/>
        </div>
    )
}

export default Todo