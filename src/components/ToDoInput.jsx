function TodoInput({ input, setInput, addTask }) {
  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      <button
        onClick={addTask}
        className="px-5 py-3 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 shadow-md transform hover:scale-105 transition"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
