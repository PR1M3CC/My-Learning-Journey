import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    dispatch(addTodo(todo));

    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        autoFocus
        maxLength={100}
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="hover:cursor-pointer hover:bg-green-600 rounded-r-lg px-3 py-1 bg-green-700 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
