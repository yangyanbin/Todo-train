function addTodo(todo){
    return {
        type:"TODO_ADD",
        payload:todo
    }
}

function deleteTodo(index){
    return {
        type:"TODO_DELETE",
        payload:index
    }
}

function updateTodo(index){
    return {
        type:"TODO_UPDATE",
        payload:index
    }
}

function filterTodo(isAll){
    return {
        type:"TODO_FILTER",
        payload:isAll
    }
}

export {addTodo,deleteTodo,filterTodo,updateTodo};