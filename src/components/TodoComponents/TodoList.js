import React from "react";
import Todo from '.Todo';

const TodoList = props => {
    return (
        <div className="class-list">
            {props.app.map(item => (
                <Todo todo={item} key={item.name} />
        ))}
        </div>
    );
};

export default TodoList;