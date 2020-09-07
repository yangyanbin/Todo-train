import React from "react";
import AppContext from "./AppContext";
import useTodoReducer from "./useTodoReducer";

const {Provider} = AppContext;

export default function App(props){
	const [todos,dispatch] = useTodoReducer();
	const appData = {todos,dispatch};
	return <Provider value={appData}>{props.children}</Provider>
}