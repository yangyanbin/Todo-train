import "./assets/main.css";
import React from "react";
// import ReactDom from "react-dom";
// import {HashRouter as Router,Route,Link} from "react-router-dom";
// import {BrowserRouter as Router,Route} from "react-router-dom";
import {Router,Route} from 'dva/router';
import createLoading from 'dva-loading';
import TodoList from "./page/TodoList";
import About from "./page/About";
import HeaderLink from "./page/Header";
import dva from 'dva';
import todoModel from './store/todoModel';
import appTitle,{isEmpty as empty,isString} from "./util/util";

const app = dva();
app.use(createLoading());
app.model(todoModel);
app.router(({history})=>{
	return (
		<Router history={history}>
			<>
				<HeaderLink appTitle={appTitle} empty={empty} />
				<Route exact path="/" component={TodoList}></Route>
				<Route path="/about" component={About}></Route>
			</>
		</Router>
	);
});
app.start('#root');

document.title = isString("haha")?"Let's Rock!":"haha";