import list from "./todo.json";
function todoList(state=list,action){
    switch(action.type){
        case "TODO_ADD":
            return [].concat(state,action.payload);
        case "TODO_DELETE":
            return [].concat(state.slice(0,action.payload),state.slice(action.payload+1));
        case "TODO_UPDATE":
            return [].concat(state.slice(0,action.payload),{...state[action.payload],isFinish:!state[action.payload].isFinish},state.slice(action.payload+1));
        default:
            return state;
    }
}

function isShowAll(state=true,action){
    switch(action.type){
        case "TODO_FILTER":
            return action.payload;
        default:
            return state;
    }
}

export {todoList,isShowAll};