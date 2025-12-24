function TodoInput({ input, setInput, addTask }) {
  return (
    <div className="input-row">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;
