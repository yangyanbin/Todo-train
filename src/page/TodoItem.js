import React,{useContext} from "react";
import AppContext from "../hooks/AppContext";
import {deleteTodo,updateTodo} from "../store/action";

export default function TodoItem(props) {
    const { index, todo } = props;
    const {dispatch} = useContext(AppContext);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { dispatch(updateTodo(index)) }}>
                {todo.title}
            </span>
            <span className="badge badge-primary badge-pill point" onClick={() => { dispatch(deleteTodo(index)) }}>X</span>
        </li>
    );
}