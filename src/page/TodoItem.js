import React from "react";

export default function TodoItem(props) {
    const { index, todo, updateTodo, deleteTodo } = props;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { updateTodo(index) }}>
                {todo.title}
            </span>
            <span className="badge badge-primary badge-pill point" onClick={() => { deleteTodo(index) }}>X</span>
        </li>
    );
}