import "./assets/main.css";
import React from "react";
import ReactDom from "react-dom";
// import {HashRouter as Router,Route,Link} from "react-router-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import TodoList from "./page/TodoList";
import About from "./page/About";

import appTitle,{isEmpty as empty,isString} from "./util/util";

ReactDom.render(
	<Router>
		<h1>{empty(appTitle)?appTitle:"empty"}</h1>
		<ul>
			<li><Link to="/">Todo list</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>
		<Route exact path="/" component={TodoList}></Route>
		<Route path="/about" component={About}></Route>
	</Router>,
	document.querySelector('#root')
);
document.title = isString("haha")?"Let's Rock!":"haha";