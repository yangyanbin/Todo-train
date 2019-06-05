import React from "react";

export default function TodoItem(props) {
    const { index, todo, updateTodo, deleteTodo } = props;
    return (
        <li>
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { updateTodo(index) }}>
                {todo.title}
            </span>
            <button onClick={() => { deleteTodo(index) }}>X</button>
        </li>
    );
}