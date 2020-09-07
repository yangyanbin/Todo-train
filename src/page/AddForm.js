import React,{useContext} from "react";
import useInputState from '../hooks/useInputState';
import {addTodo} from "../store/action";
import AppContext from "../hooks/AppContext";

export default function AddForm (){
    const [ title, handleChange, reset ] = useInputState("");
    const {dispatch} = useContext(AppContext);
    function handleAdd (){
        const newTodo = {
            title: title,
            isFinish: false,
            desc: title
        }
        if (title) {
            dispatch(addTodo(newTodo));
            reset();
        }
    }
    return (
        <div className="input-group mb-3">
            <input className='form-control'
                value={title}
                onChange={handleChange}
                name="title" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={handleAdd}>+</button>
                </div>
        </div>
    );
}
