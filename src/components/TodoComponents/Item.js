import React from "react";
import Entry from './Entry';

const Item = props => {
    return <Entry todo={props.todo} />
};

export default Item;