import React from "react";
import store from "../store";
import {deleteTodo,updateTodo} from "../store/action"

export default function TodoItem(props) {
    const { index, todo } = props;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { store.dispatch(updateTodo(index)) }}>
                {todo.title}
            </span>
            <span className="badge badge-primary badge-pill point" onClick={() => { store.dispatch(deleteTodo(index)) }}>X</span>
        </li>
    );
}