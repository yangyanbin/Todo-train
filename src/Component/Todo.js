import React,{Component} from "react";
import Add from "./Add"
import store from "../store/store"
import {observer} from "mobx-react"

class Todo extends Component{
	
	handleClick(index){
		let newList = this.state.list.slice(0,index).concat(this.state.list.slice(index+1))
		this.setState({list:newList});
	}
	handleAdd(newItem){
		store.add(newItem);
	}
	
	render(){
		const todoList = Array.from(store.todoList);
		return (
			<>
				<Add handleAdd={this.handleAdd.bind(this)} />
				<ul>
					{todoList.map((item,index)=><li key={item}>{item}<button onClick={()=>{this.handleClick(index)}}>X</button></li>)}
				</ul>
			</>
		)
	}
}

export default observer(Todo);
