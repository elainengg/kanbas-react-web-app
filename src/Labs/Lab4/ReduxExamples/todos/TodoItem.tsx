import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }: { todo: any }
        //   deleteTodo, setTodo
) {
        const dispatch = useDispatch();

        return (
                <li key={todo.id} className="list-group-item ">
                        <button onClick={() => dispatch(deleteTodo(todo.id))}
                                id="wd-delete-todo-click"
                                className="btn btn-danger"> Delete </button>
                        <button onClick={() => dispatch(setTodo(todo))}
                                id="wd-set-todo-click" className="btn btn-primary me-2">
                                         Edit </button>
                        {todo.title}
                </li>
        );
}
