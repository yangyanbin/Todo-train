import React, {Component} from "react";
import todoList from "./todo.json"
import TodoItem from "./TodoItem"
import AddForm from "./AddForm"

export default class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            list:todoList
        };
    }

    handleClick = (e)=>{
        e = e.nativeEvent;
        if(e.target.tagName === "UL"){
            console.log(this,e.nativeEvent);
        }
    }

    deleteItem = (index)=>{
        const {list} = this.state;
        const newList = list.slice(0,index).concat(list.slice(index+1));
        this.setState({list:newList});
    }

    addTodo = (todo)=>{
        const {list} = this.state;
        const newList = list.concat(todo);
        this.setState({list:newList});
    }

    updateStatus = (index)=>{
        const {list} = this.state;
        const newList = list.slice(0,index).concat({...list[index],isFinish:!list[index].isFinish},list.slice(index+1));
        this.setState({list:newList});
    }
    
    render(){
        const {list} = this.state;
        return (
            <section className="todo-list">
                <AddForm addTodo={this.addTodo} />
                <ul onClick={this.handleClick}>
                    {list.map((item,index)=><TodoItem key={index} index={index} todo={item} updateStatus={this.updateStatus} deleteTheTodo={this.deleteItem} />)}
                </ul>
            </section>
            
        );
    }
}