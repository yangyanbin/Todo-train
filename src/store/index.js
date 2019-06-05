import {createStore,combineReducers,applyMiddleware } from "redux";
import * as reducer from "./reducer";
import logger from "redux-logger";


const rootReducer = combineReducers(reducer);

/* const rootReducer = (state,action)=>{
    return {
        todoList:reducer.todoList(state.todoList,action),
        isShowAll:reducer.isShowAll(state.isShowAll,action),
    }
} */

const store = createStore(rootReducer,{},applyMiddleware(logger));

export default store;

