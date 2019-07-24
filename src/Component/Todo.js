import React,{Component} from "react";
import Add from "./Add"


export default class Header extends Component{
	constructor(){
		super();
		this.state = {
			list:["todo 1","todo 2"]
		}
	}
	handleClick(index){
		let newList = this.state.list.slice(0,index).concat(this.state.list.slice(index+1))
		this.setState({list:newList});
	}
	handleAdd(newItem){
		let newList = this.state.list.concat(newItem)
		this.setState({list:newList});
	}
	render(){
		return (
			<>
				<Add handleAdd={this.handleAdd.bind(this)} />
				<ul>
					{this.state.list.map((item,index)=><li key={item}>{item}<button onClick={()=>{this.handleClick(index)}}>X</button></li>)}
				</ul>
			</>
		)
	}
}