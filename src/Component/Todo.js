import React,{Component} from "react";
import Add from "./Add"
import {connect} from "react-redux";


class Todo extends Component{
	componentDidMount(){
		
	}
	handleClick(index){
		let newList = this.state.list.slice(0,index).concat(this.state.list.slice(index+1))
		this.setState({list:newList});
	}
	handleAdd(newItem){
		this.props.add(newItem);
	}
	render(){
		const {todoList} = this.props;
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
const mapStateToProps=(state)=>{
	return {
		todoList:state.todoList
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		add:(newItem)=>{

			return dispatch({type:"ADD",payload:newItem})
		}
	} 
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo);
