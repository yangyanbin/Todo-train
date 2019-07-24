// import "./assets/main.css";
import React from "react";
import ReactDom from "react-dom";
import Header from "./Component/Header"
import Todo from "./Component/Todo"

ReactDom.render(
	<div>
		<Header />
		<Todo />
	</div>,
	document.querySelector('#root')
);
document.title = "Let's Rock!";