import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={() => {
          setTodos([...todos, task]);
          setTask("");
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                setTodos(todos.filter((_, i) => i !== index));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;