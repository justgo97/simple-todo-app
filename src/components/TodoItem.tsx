import { useAppDispatch } from "../store";
import { todosActions } from "../store/todosReducer";
import { ITodo } from "../types";

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
        <div className="todo-list-item-footer-date">
          {todo.date_modified &&
            new Date(todo.date_modified).toLocaleDateString()}
        </div>
        <div className="todo-list-item-footer-buttons">
          <button
            className={`todo-list-item-footer-buttons-toggle ${
              todo.completed
                ? "todo-list-item-footer-buttons-toggle-completed"
                : ""
            }`}
            onClick={onClickToggle}
          >
            Complete
          </button>
          <button
            className="todo-list-item-footer-buttons-delete"
            onClick={onClickDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
