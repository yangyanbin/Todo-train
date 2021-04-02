import {useContext} from "react";
import AppContext from "./AppContext";

export default function useListLength (){
    const {todos} = useContext(AppContext);
    console.log('list length hook',todos.length);
    return [todos.length];
}