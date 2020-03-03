import React, { Component } from "react";
import store from "../store";
import {addTodo} from "../store/action"

export default class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        };
    }

    handleChange = (e) => {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        });
    }

    componentDidMount() {
        console.log(this.titleInput);
    }

    handleAdd = () => {
        const newTodo = {
            title: this.state.title,
            isFinish: false,
            desc: this.state.title
        }
        if (this.state.title) {
            store.dispatch(addTodo(newTodo));
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input className='form-control'
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    ref={node => this.titleInput = node} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.handleAdd}>+</button>
                    </div>
            </div>
        );
    }
}