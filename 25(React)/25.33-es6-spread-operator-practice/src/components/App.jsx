import { useState } from 'react'

function App() {
  // useState hook to manage the 'name' state
  let [name, setName] = useState('');

  // useState hook to manage the 'todolistnames' state which is an array of to-do items
  let [todolistnames, setTodolistnames] = useState([]);

  // Function to add a new to-do item to the list
  const addtodolist = () => {
    // Initialize nextId to 1
    let nextId = 1;
    
    // Update the 'todolistnames' state by adding the new to-do item at the beginning
    setTodolistnames([
      { id: nextId++, name: name }, // Create a new to-do item object with a unique id and the current name
      ...todolistnames // Spread the existing to-do items
    ]);
    
    // Reset the 'name' state to an empty string
    setName('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1> {/* Display heading */}
      </div>
      <div className="form">
        {/* Input field to enter the name of the to-do item */}
        <input 
          value={name} // Set the value of the input to the 'name' state
          type="text"
          onChange={e => setName(e.target.value)} // Update the 'name' state when the input value changes
        />
        <button>
          {/* Add button to add the new to-do item to the list */}
          <span onClick={addtodolist}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* Map over the 'todolistnames' array and display each to-do item */}
          {todolistnames.map(todolist => (
            <li key={todolist.id}>{todolist.name}</li> // Each list item needs a unique key
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
