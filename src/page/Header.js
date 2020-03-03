import React,{Component} from "react";
import {Link} from "react-router-dom";
import store from "../store";

export default class HeaderLink extends Component{
    constructor(){
        super();
        this.state = {
            listLength:store.getState().todoList.length
        }
    }
    componentDidMount(){
        this.unSubscribe = store.subscribe(()=>{
            this.setState({listLength:store.getState().todoList.length});
        });
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    render(){
        return (<header>
            {/* <h1>React quick start!!</h1> */}
			<nav className='nav'>
				<Link className='nav-link' to="/">Todo list <span className="badge badge-info">{this.state.listLength}</span></Link>
				<Link className='nav-link' to="/about">About</Link>
			</nav>
        </header>);
    }
}