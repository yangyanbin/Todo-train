import React,{useContext,memo} from "react";
// import AppContext from "../hooks/AppContext";
import {AppDispatchContext as AppContext} from "../hooks/AppContext";
import {deleteTodo,updateTodo} from "../store/action";

function TodoItem(props) {
    console.log('todoItem');
    const { index, todo } = props;
    // const {dispatch} = useContext(AppContext);
    const dispatch = useContext(AppContext);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" onClick={props.onClick?props.onClick:()=>{}}>
            <span style={{ marginRight: '20px' }}
                className={todo.isFinish ? "finished" : ""}
                onClick={() => { dispatch(updateTodo(index)) }}>
                {todo.title}
            </span>
            <span className="badge badge-primary badge-pill point" onClick={() => { dispatch(deleteTodo(index)) }}>X</span>
        </li>
    );
}

export default memo(TodoItem,(prevProps,nextProps)=>{
    console.log(JSON.stringify(prevProps)===JSON.stringify(nextProps));
    if(JSON.stringify(prevProps)===JSON.stringify(nextProps)){
        return true;
    }
});
