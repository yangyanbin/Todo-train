import React, { Component } from "react";

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
            this.props.addTodo(newTodo);
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    ref={node => this.titleInput = node} />
                <button onClick={this.handleAdd}>+</button>
            </div>
        );
    }
}