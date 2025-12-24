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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          📝 React To-Do
        </h1>

        <TodoInput input={input} setInput={setInput} addTask={addTask} />

        <ul className="space-y-3 mt-4">
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
