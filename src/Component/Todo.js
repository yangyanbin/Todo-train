import React,{Component} from "react";
import Add from "./Add"
import store from "../store/store"
import {autorun} from "mobx"

class Todo extends Component{
	constructor(){
		super();
		this.state = {
			todoList:Array.from(store.todoList)
		}
	}
	componentDidMount(){
		window.store = store;
		/* this.removeSub = store.subscribe(()=>{
			this.setState({todoList:Array.from(store.todoList)});
		}); */
		this.removeSub = autorun(()=>{
			this.setState({todoList:Array.from(store.todoList)});
		});
	}
	handleClick(index){
		let newList = this.state.list.slice(0,index).concat(this.state.list.slice(index+1))
		this.setState({list:newList});
	}
	handleAdd(newItem){
		store.add(newItem);
	}
	componentWillUnmount(){
		this.removeSub();
	}
	render(){
		const {todoList} = this.state;
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

export default Todo;
