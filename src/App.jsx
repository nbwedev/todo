import { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/16/solid";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn react" },
    { id: 2, text: "Build todo" },
    { id: 3, text: "Practice github workflow" },
  ]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo here..."
      />

      <PlusIcon className="size-6 text-blue=500" />

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <TrashIcon className="size-6" />
        </div>
      ))}
    </div>
  );
}

export default App;
