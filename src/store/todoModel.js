import list from "./todo.json";
import {ajax} from './services';
export default {
    namespace:'TODO',
    state:{
        todoList:list,
        isShowAll:true
    },
    effects:{
        *addTodo({payload},{call,put,select}){
            const data = yield call(ajax,payload);
            const todoList = yield select(state=>state.TODO.todoList);
            console.log(todoList);
            if(data==='success'){
                yield put({type:'add',payload:payload})
            }
        },
        *deleteTodo({payload},{call,put}){
            const data = yield call(ajax,payload);
            if(data==='success'){
                yield put({type:'delete',payload:payload})
            }
        },
        *updateTodo({payload},{call,put}){
            const data = yield call(ajax,payload);
            if(data==='success'){
                yield put({type:'update',payload:payload})
            }
        },
        *filterTodo({payload},{call,put}){
            const data = yield call(ajax,payload,3000);
            if(data==='success'){
                yield put({type:'updateState',payload:{isShowAll:payload}})
            }
        }
    },
    reducers:{
        updateState(state,{payload}){
            return {...state,...payload}
        },
        add(state,{payload}){
            const newList = [].concat(state.todoList,payload);
            return {
                ...state,
                todoList:newList
            }
        },
        delete(state,{payload}){
            const newList = [].concat(state.todoList.slice(0,payload),state.todoList.slice(payload+1));
            return {
                ...state,
                todoList:newList
            }
        },
        update(state,{payload}){
            const newList = [].concat(state.todoList.slice(0,payload),{...state.todoList[payload],isFinish:!state.todoList[payload].isFinish},state.todoList.slice(payload+1));
            return {
                ...state,
                todoList:newList
            }
        }
    }
}
