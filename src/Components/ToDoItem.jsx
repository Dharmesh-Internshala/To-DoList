import React from "react";

function ToDoItem({ inputText, setInputText, addList, toggleSubmit }) {
    return (
        <div className="input-section">
            <input 
                type="text" 
                className="input-bar" 
                placeholder="Add Data" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className="input-button" onClick={addList}>
                {toggleSubmit ? "Add Data" : "Edit Data"}
            </button>
        </div>
    );
}

export default ToDoItem;
