import React, {Component} from "react";
import TodoItem from "./TodoItem"
import AddForm from "./AddForm"
// import store from "../store"
import {filterTodo} from "../store/action"
import {connect} from '../store/connect'

class TodoList extends Component{
    /*constructor(){
        super();
        this.state = {
            ...store.getState()
        };
    }*/

    handleClick = (e)=>{
        e = e.nativeEvent;
        console.log(this,e.nativeEvent);
        this.props.dispatch(this.filterTodoing(!this.props.isShowAll));
    }

    filterTodoing(bl){
        return dispatch=>{
            return new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(filterTodo(bl));
                },2000);
            }).then((res)=>dispatch(res)); 
        }
    }

    /*componentDidMount(){
        this.todoSub = store.subscribe(()=>{
            this.setState({...store.getState()})
        });
    }

    componentWillUnmount(){
        this.todoSub();
    }*/
    
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
                    {list.map((item,index)=><TodoItem key={index} index={index} todo={item} />)}
                </ul>
            </section>
            
        );
    }
}

export default connect((state)=>{
    return {
        ...state
    };
})(TodoList);