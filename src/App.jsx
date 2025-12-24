import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white w-[360px] p-6 rounded-xl shadow-xl transition-transform hover:scale-[1.02]">
        <h1 className="text-2xl font-bold text-center mb-4">React To-Do</h1>

        <TodoInput
          input={input}
          setInput={setInput}
          addTask={addTask}
        />

        <ul className="mt-4 space-y-2">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
