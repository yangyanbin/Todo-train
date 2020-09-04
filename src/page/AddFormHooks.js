import React, { useState, useEffect } from "react";

export default function AddFormHooks(props){
    const [title,setTitle] = useState('');
    function handleChange (e){
        setTitle(e.target.value);
    }
    function handleAdd (){
        const {addTodo} = props;
        const newTodo = {
            title: title,
            isFinish: false,
            desc: title
        }
        if (title) {
            addTodo(newTodo);
            setTitle('');
        }
    }
    useEffect(()=>{
        console.log(title);
    },[title]);
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