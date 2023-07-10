import { getAllTodos, useAppDispatch, useAppSelector } from "../store";
import { todosActions } from "../store/todosReducer";
import { ITodo } from "../types";

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

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    //
    dispatch(todosActions.deleteTodo(todo.id));
  };

  const onClickToggle = () => {
    //
    dispatch(todosActions.toggleTodo(todo.id));
  };

  return (
    <div className="todo-list-item">
      <div className="todo-list-item-main">
        <h3 className="todo-list-item-main-title">
          <span
            className={`todo-list-item-main-title-status ${
              todo.completed ? "todo-list-item-main-title-status-completed" : ""
            }`}
          ></span>
          <span>{todo.title}</span>
        </h3>
        <p
          className={`todo-list-item-main-description ${
            todo.completed ? "todo-list-item-main-description-completed" : ""
          }`}
        >
          {todo.description}
        </p>
      </div>
      <div className="todo-list-item-footer">
        <button
          className={`todo-list-item-footer-toggle ${
            todo.completed ? "todo-list-item-footer-toggle-completed" : ""
          }`}
          onClick={onClickToggle}
        >
          Complete
        </button>
        <button
          className="todo-list-item-footer-delete"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
