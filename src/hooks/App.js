import React from "react";
import AppContext,{AppDispatchContext} from "./AppContext";
import useTodoReducer from "./useTodoReducer";

const {Provider} = AppContext;
const {Provider:DispatchProvider} = AppDispatchContext;

export default function App(props){
	const [todos,dispatch] = useTodoReducer();
	const appData = {todos,dispatch};
	// return <Provider value={appData}>{props.children}</Provider>
	return <DispatchProvider value={dispatch}><Provider value={appData}>{props.children}</Provider></DispatchProvider>
}