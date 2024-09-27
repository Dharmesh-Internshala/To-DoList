import React from "react";

function ToDoList(props) {
    const handleCheckboxChange = () => {
        if (props.item.completed) {
            return null;
        }
        props.toggleComplete(props.index);
    };

    return (
        <div className={`list-container ${props.item.completed ? "completed" : ""}`}>
            <li className="list-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={handleCheckboxChange} 
                />
                <span style={{ textDecoration: props.item.completed ? "line-through" : "none", marginLeft : "6px",}}>
                    {props.item.text}
                </span>
            </li>
            <span>
                <i
                    className="fa-solid fa-pen-to-square pen-icon"
                    onClick={() => props.editlist(props.index)}
                ></i>
                <i
                    className="fa-solid fa-trash-can icon-delete"
                    onClick={() => props.deleteItem(props.index)}
                ></i>
            </span>
        </div>
    );
}

export default ToDoList;
