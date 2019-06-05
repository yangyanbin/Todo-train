import React, {Component} from "react";
import TodoItem from "./TodoItem"
import AddForm from "./AddForm"
import {filterTodo} from "../store/action"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

class TodoList extends Component{

    handleClick = (e)=>{
        e = e.nativeEvent;
        console.log(this,e.nativeEvent);
        this.filterTodo(!this.props.isShowAll);
    }

    componentDidMount(){
        const {dispatch} = this.props;
        this.filterTodo = bindActionCreators(filterTodo,dispatch);
    }

    render(){
        const {todoList,isShowAll} = this.props;
        const list = todoList.filter(item=>{
            return !item.isFinish||isShowAll
        });
        return (
            <section className="todo-list">
                <AddForm />
                <button onClick={this.handleClick}>Filter</button>
                <ul>
                    {list.map((item,index)=><TodoItem key={index} index={index} todo={item} />)}
                </ul>
            </section>
            
        );
    }
}

const mapStateToProps = state =>{
    return {
        todoList:state.todoList,
        isShowAll:state.isShowAll
    }
}

/* const mapDispatchToProps = dispatch=>{
    return {
        filterTodo:isAll=>dispatch(filterTodo(isAll))
    }
} */

export default connect(mapStateToProps)(TodoList);