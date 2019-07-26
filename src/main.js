// import "./assets/main.css";
import React from "react";
import ReactDom from "react-dom";
import Header from "./Component/Header"
import Todo from "./Component/Todo"
import {Provider} from "react-redux"
import store from "./store/store"

ReactDom.render(
	<Provider store={store}>
		<div>
			<Header />
			<Todo />
		</div>
	</Provider>,
	document.querySelector('#root')
);
document.title = "Let's Rock!";