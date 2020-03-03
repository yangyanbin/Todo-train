import React, {Component} from "react";
import TodoItem from "./TodoItem"
import AddForm from "./AddForm"
import {connect} from "dva";

class TodoList extends Component{

    handleClick = (e)=>{
        e = e.nativeEvent;
        console.log(this,e.nativeEvent);
        this.props.dispatch({
            type:'TODO/filterTodo',
            payload:!this.props.isShowAll
        });
    }

    addTodo = (newTodo)=>{
        this.props.dispatch({
            type:'TODO/addTodo',
            payload:newTodo
        });
    }

    updateTodo = (index)=>{
        this.props.dispatch({
            type:'TODO/updateTodo',
            payload:index
        });
    }

    deleteTodo = (index)=>{
        this.props.dispatch({
            type:'TODO/deleteTodo',
            payload:index
        });
    }

    render(){
        const {todoList,isShowAll,loading} = this.props;
        const list = todoList.filter(item=>{
            return !item.isFinish||isShowAll
        });
        return (
            <section className="todo-list">
                <AddForm addTodo={this.addTodo}/>
                <button className='btn btn-primary' onClick={this.handleClick}>{loading?'Loading':'Filter'}</button>
                <ul style={{marginTop:15}} className="list-group">
                    {list.map((item,index)=><TodoItem key={index} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} index={index} todo={item} />)}
                </ul>
            </section>
            
        );
    }
}

const mapStateToProps = state =>{
    return {
        todoList:state.TODO.todoList,
        isShowAll:state.TODO.isShowAll,
        loading:!!state.loading.effects['TODO/filterTodo']
    }
}

export default connect(mapStateToProps)(TodoList);