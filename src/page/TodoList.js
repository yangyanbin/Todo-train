import React, {useState,useContext, useCallback, useMemo} from "react";
import TodoItem from "./TodoItem";
import AddForm from "./AddForm";
import Filter from "./Filter";
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
    const _handleClick = useCallback(handleClick,[setIsShowAll,isShowAll]);
    const mode = useMemo(()=>({isShowAll}),[isShowAll]);
    return (
        <section className="todo-list">
            <AddForm />
            <Filter handleClick={_handleClick} mode={mode} />
            <ul style={{marginTop:15}} className="list-group">
                {list.map((item,index)=><TodoItem key={index} index={index} todo={item} />)}
            </ul>
            {/* <LiGroup>
                {list.map((item,index)=><TodoItem key={index} index={index} todo={item} />)}
            </LiGroup> */}
        </section>
    );
}

/* function LiGroup(props){
    return (<ul style={{marginTop:15}} className="list-group">
        {React.Children.map(props.children,(child,index)=>{
            return React.cloneElement(child,{
                onClick: () => {
                    alert('click todo item index: '+index);
                }
            });
        })}
    </ul>);
} */