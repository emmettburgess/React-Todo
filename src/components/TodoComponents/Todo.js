import React from "react";
import Item from './Item';

const Todo = props => {
    return (
        <div classNname="todo-card">
        <div className="todo-info">
        {/* <h3>{props.todo.item}</h3> */}
        <Item todo={props.todo} />
        </div>
        </div>
    );
};

export default Todo;