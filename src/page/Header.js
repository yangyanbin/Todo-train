import React,{Component} from "react";
import {Link} from "dva/router";
import { connect } from "dva";

class HeaderLink extends Component{
    render(){
        return (<header>
            <h1>React quick start!!</h1>
			<ul>
				<li><Link to="/">Todo list({this.props.listLength})</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
        </header>);
    }
}
const mapStateToProps = state =>{
    return {
        listLength:state.TODO.todoList.length
    }
}

export default connect(mapStateToProps)(HeaderLink);