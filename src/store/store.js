import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger"
const rootReducer = (state,action)=>{
    let newList;
    switch(action.type){
        case "ADD":
            newList = state.todoList.concat(action.payload)
            return {
                ...state,
                todoList:newList
            };
        default:
            return state;
    }
}

const defaultState = {
    todoList:["todo 1","todo 2"],
    goods:[]
}
const store = createStore(rootReducer,defaultState,applyMiddleware(logger));

export default store;