import { getAllTodos, useAppSelector } from "../store";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useAppSelector(getAllTodos());

  const todoArray = Object.keys(todoList).map((todoID) => todoList[todoID]);

  return (
    <>
      {todoArray.length ? (
        <div className="todo-list">
          {todoArray.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
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
