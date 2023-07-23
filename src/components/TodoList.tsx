import { getAllTodos, useAppSelector } from "../store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useAppSelector(getAllTodos());

  const todosKeys = Object.keys(todoList);

  return (
    <>
      {todosKeys.length ? (
        <div className="todo-list">
          {todosKeys.map((todoID) => (
            <TodoItem key={todoID} todo={todoList[todoID]} />
          ))}
        </div>
      ) : (
        <p className="text-secondary">
          <br />
          No Todos added yet, fill the form and click the button to add your
          first todo!
        </p>
      )}
    </>
  );
};

export default TodoList;
