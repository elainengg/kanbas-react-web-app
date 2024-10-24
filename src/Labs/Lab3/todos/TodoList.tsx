import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map(todo => {
                    // turns every item in the json file into a todo checkbox
                    return (<TodoItem todo={todo} />);
                })}
            </ul><hr />
        </>
    );
}
export default TodoList;