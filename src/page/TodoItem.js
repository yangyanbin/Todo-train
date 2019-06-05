import React from "react";

export default function TodoItem(props) {
    const { index, todo, deleteTheTodo, updateStatus } = props;
    return (
        <li>
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { updateStatus(index) }}>
                {todo.title}
            </span>
            <button onClick={() => { deleteTheTodo(index) }}>X</button>
        </li>
    );
}