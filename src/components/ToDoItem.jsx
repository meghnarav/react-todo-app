function TodoItem({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
      <span className="text-gray-700">{task}</span>
      <button
        onClick={onDelete}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-110"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
