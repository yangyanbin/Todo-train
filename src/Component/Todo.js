import React,{Component} from "react";
import Add from "./Add"
import store from "../store/store"

class Todo extends Component{
	constructor(){
		super();
		this.state = {
			todoList:store.getState().todoList
		}
	}
	componentDidMount(){
		this.removeSub = store.subscribe(()=>{
			this.setState({todoList:store.getState().todoList});
		});
	}
	handleClick(index){
		let newList = this.state.list.slice(0,index).concat(this.state.list.slice(index+1))
		this.setState({list:newList});
	}
	handleAdd(newItem){
		store.dispatch({type:"ADD",payload:newItem});
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
