import React from "react";
import {Link} from "dva/router";
import { connect } from "dva";

function HeaderLink(props){
    return (<header>
        {/* <h1>React quick start!!</h1> */}
		<nav className='nav'>
			<Link className='nav-link' to="/">Todo list <span className="badge badge-info">{props.listLength}</span></Link>
			<Link className='nav-link' to="/about">About</Link>
		</nav>
    </header>);
}
const mapStateToProps = state =>{
    return {
        listLength:state.TODO.todoList.length
    }
}

export default connect(mapStateToProps)(HeaderLink);