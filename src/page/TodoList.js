import React, {Component} from "react";
import TodoItem from "./TodoItem"
import AddForm from "./AddForm"
import * as reducer from "../store/action"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

class TodoList extends Component{

    handleClick = (e)=>{
        e = e.nativeEvent;
        console.log(this,e.nativeEvent);
        this.props.dispatch(reducer.filterTodo(!this.props.isShowAll));
    }

    componentWillMount(){
        const {dispatch} = this.props;
        this.bindActionCreators = bindActionCreators({...reducer},dispatch);
    }

    render(){
        const {todoList,isShowAll} = this.props;
        const list = todoList.filter(item=>{
            return !item.isFinish||isShowAll
        });
        return (
            <section className="todo-list">
                <AddForm />
                <button className='btn btn-primary' onClick={this.handleClick}>Filter</button>
                <ul style={{marginTop:15}} className="list-group">
                    {list.map((item,index)=><TodoItem {...this.bindActionCreators} key={index} index={index} todo={item} />)}
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