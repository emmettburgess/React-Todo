import React from "react";

const TodoForm = props => {
    return (
        <form onSubmit={props.addItem}>
        <input
            name="item"
            placeholder="Entry"
            value={props.item}
            onChange={props.changeHandler}
        />
        <button type="submit">Add</button>
        <button type="submit">Clear</button>
        </form>
    );
};

export default TodoForm;