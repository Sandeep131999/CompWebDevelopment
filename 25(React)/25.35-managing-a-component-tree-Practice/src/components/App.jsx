import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);
  


  function addItem(inputText) 
  {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) 
  {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
         onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

/*Example
If items is ["apple", "banana", "cherry"] and you call deleteItem(1), the function will:

Current State: prevItems = ["apple", "banana", "cherry"]
Filter Operation:
For index = 0, index !== 1 is true → "apple" is kept.
For index = 1, index !== 1 is false → "banana" is removed.
For index = 2, index !== 1 is true → "cherry" is kept.
New State: The new state will be ["apple", "cherry"].*/