import React,{Component} from "react";

export default class Add extends Component{
	constructor(){
		super();
		this.state = {
			item:""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleChange(e){
		this.setState({item:e.target.value});
	}
	handleClick(){
		this.props.handleAdd(this.state.item)
	}
	render(){
		return (<div>
			<input value={this.state.item} onChange={this.handleChange} /><button onClick={this.handleClick}>+</button>
		</div>)
	}
}