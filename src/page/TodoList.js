import React, {Component} from "react";
import TodoItem from "./TodoItem"
import AddForm from "./AddForm"
import store from "../store"
import {filterTodo} from "../store/action"

export default class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            ...store.getState()
        };
    }

    handleClick = (e)=>{
        e = e.nativeEvent;
        console.log(this,e.nativeEvent);
        store.dispatch(this.filterTodoing(!store.getState().isShowAll));
    }

    filterTodoing(bl){
        return dispatch=>{
            return new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(filterTodo(bl));
                },2000);
            }).then((res)=>dispatch(res)); 
        }
    }

    componentDidMount(){
        this.todoSub = store.subscribe(()=>{
            this.setState({...store.getState()})
        });
    }

    componentWillUnmount(){
        this.todoSub();
    }
    
    render(){
        const {todoList,isShowAll} = this.state;
        const list = todoList.filter(item=>{
            return !item.isFinish||isShowAll
        });
        return (
            <section className="todo-list">
                <AddForm />
                <button onClick={this.handleClick}>Filter</button>
                <ul>
                    {list.map((item,index)=><TodoItem key={index} index={index} todo={item} />)}
                </ul>
            </section>
            
        );
    }
}