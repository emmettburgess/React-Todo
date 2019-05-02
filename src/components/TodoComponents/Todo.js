import React from "react";
import Identity from './Identity';

const Todo = props => {
    return (
        <div classNname="todo-card">
        <div className="todo-info">
        <Identity todo={props.todo} />
        </div>
        </div>
    );
};

export default Todo;