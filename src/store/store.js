import {observable, action, autorun} from "mobx";

class Store{
    todoList = observable.array(["todo 1","todo 2"])
    add = action((newItem)=>{
        this.todoList.push(newItem);
    });
    subscribe = callback=>autorun(callback);
}

export default new Store();