import React,{useState} from "react";
import Note from "./Note";

function CreateArea() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [items, setItems] = useState([]);

   function handleTitleChange(event) 
   {
     const newValue = event.target.value;
      setTitle(newValue);
   }

   function handleContentChange(event) 
   {
      const newValue2 = event.target.value;
      setContent(newValue2);
   }
  
    function addItem() 
    {
      setItems(prevItems => {
        return [...prevItems,{title,content}];
      });
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleTitleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleContentChange}/>
        <button
          onClick={addItem}
        >Add</button>
      </form>
      {items.map((item, index) => (
          <Note
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
    </div>
  );
}

export default CreateArea;
