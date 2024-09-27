import React, { useState } from "react";
import Header from "./Components/Header";
import ToDoItem from "./Components/ToDoItem";
import ToDoList from "./Components/ToDoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [listTodo, setListToDo] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [submitdata, setSubmitdata] = useState(null);

  const addList = () => {
    if (inputText.trim() === "") {
      alert("Please fill in the task");
    } else if (inputText && !toggleSubmit) {
      setListToDo(
        listTodo.map((item, i) => {
          if (i === submitdata) {
            return { ...item, text: inputText };
          }
          return item;
        })
      );
      setToggleSubmit(true);
      setInputText("");
      setSubmitdata(null);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        text: inputText,
        completed:false,
      };
      setListToDo([...listTodo, newItem]);
      setInputText("");
    }
  };

  const editlistitem = (index) => {
    const itemToEdit = listTodo[index];
    setToggleSubmit(false);
    setInputText(itemToEdit.text);
    setSubmitdata(index);
  };

  const deleteListItem = (index) => {
    const afterdellist = listTodo.filter((item, i) => i !== index);
    setListToDo(afterdellist);
  };

  const toggleComplete = (index)=> {
    setListToDo(
      listTodo.map((item, i)=> 
      i === index ? {...item, completed : !item.completed} : item
      )
    )
  }

  return (
    <div className="main-container">
      <Header />
      <ToDoItem 
        addList={addList}
        inputText={inputText}
        setInputText={setInputText}
        toggleSubmit={toggleSubmit}
      />
      <h1 className="Render-heading">Rendered List</h1>
      {listTodo.map((listItem, i) => (
        <ToDoList
          key={i}
          index={i}
          item={listItem}
          deleteItem={deleteListItem}
          editlist={editlistitem}
          toggleComplete = {toggleComplete}
        />
      ))}
    </div>
  );
}

export default App;
