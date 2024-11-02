import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
// { todo, setTodo, addTodo, updateTodo }
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click" className="btn btn-success"> Add </button>
              <div className="btn btn-update">
      <button onClick={() => dispatch(updateTodo(todo))}
      
              id="wd-update-todo-click" className="btn btn-warning"> Update </button>
              </div>
      <input
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
    </li>
);}