import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/main.css";
import React from "react";
import ReactDom from "react-dom";
// import {HashRouter as Router,Route,Link} from "react-router-dom";
import {BrowserRouter as Router,Route} from "react-router-dom";
import TodoList from "./page/TodoList";
import About from "./page/About";
import HeaderLink from "./page/Header";
import appTitle,{isEmpty as empty,isString} from "./util/util";
import App from "./hooks/App";

ReactDom.render(
	<App>
		<Router>
			<HeaderLink empty={empty} appTitle={appTitle} />
			<Route exact path="/" component={TodoList}></Route>
			<Route path="/about" component={About}></Route>
		</Router>
	</App>,
	document.querySelector('#root')
);
document.title = isString("haha")?"Let's Rock!":"haha";