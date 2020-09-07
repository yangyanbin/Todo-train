import {useReducer} from "react";
import {todoListReducer,todoList} from "../store/reducer";

export default function useTodoReducer (){
    const [list,dispatch] = useReducer(todoListReducer,todoList);
    return [list,dispatch];
}