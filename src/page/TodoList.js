import React, {useState,useContext} from "react";
import TodoItem from "./TodoItem";
import AddForm from "./AddForm";
import AppContext from "../hooks/AppContext";

export default function TodoList (){
    const {todos} = useContext(AppContext);
    const [isShowAll,setIsShowAll] = useState(true);
    const list = todos.filter(item=>{
        return !item.isFinish||isShowAll
    });
    function handleClick(){
        setIsShowAll(!isShowAll)
    }
    return (
        <section className="todo-list">
            <AddForm />
            <button className='btn btn-primary' onClick={handleClick}>Filter</button>
            <ul style={{marginTop:15}} className="list-group">
                {list.map((item,index)=><TodoItem key={index} index={index} todo={item} />)}
            </ul>
        </section>
        
    );
}