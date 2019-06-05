import React from "react";
import store from "../store";
import {deleteTodo,updateTodo} from "../store/action"

export default function TodoItem(props) {
    const { index, todo } = props;
    return (
        <li>
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { store.dispatch(updateTodo(index)) }}>
                {todo.title}
            </span>
            <button onClick={() => { store.dispatch(deleteTodo(index)) }}>X</button>
        </li>
    );
}