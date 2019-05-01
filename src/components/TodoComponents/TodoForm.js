import React from "react";

const TodoForm = props => {
    return (
        <form onSubmit={props.addItem}>
        <input
        name="item"
        placeholder="To be did"
        value={props.item}
        onChange={props.changeHandler}
        />
        <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;