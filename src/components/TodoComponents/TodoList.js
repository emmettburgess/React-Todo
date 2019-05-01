import React from 'react';
import { list } from "postcss";
import TodoForm from './TodoForm';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: list,
            item: "",
        };
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    addItem = e => {
        e.preventDefault();
        this.setState({
            todoList: [...this.state.todoList, {
                item: this.state.item,
            }
        ],
        item: "",
        });
    };
    render() {
        return (
            <div>
                <h1>To-do List:</h1>
                <TodoList todoList={this.state.todoList} />
                <TodoForm addItem={this.addItem} />
            </div>
        );
    }
}

export default TodoList;