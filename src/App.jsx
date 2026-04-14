import { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";

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
    </div>
  );
}

export default App;
