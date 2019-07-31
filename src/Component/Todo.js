import React,{Component} from "react";
import Add from "./Add"
import {observer,inject} from "mobx-react"

class Todo extends Component{
	
	handleClick(index){
		let newList = this.state.list.slice(0,index).concat(this.state.list.slice(index+1))
		this.setState({list:newList});
	}
	handleAdd(newItem){
		this.props.store.add(newItem);
	}
	
	render(){
		const todoList = Array.from(this.props.store.todoList);
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

export default inject((rootStore)=>{
	console.log(rootStore);
	return {
		store:rootStore.todoStore
	}
})(observer(Todo));
