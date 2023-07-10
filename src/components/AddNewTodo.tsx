import { useState } from "react";
import { useAppDispatch } from "../store";
import { todosActions } from "../store/todosReducer";

const AddNewTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const dispatch = useAppDispatch();

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(event.target.value);
  };

  const onClickAdd = () => {
    if (!todoTitle && !todoDescription) {
      alert("Both fields are empty!");
      return;
    }

    //
    dispatch(
      todosActions.createTodo({
        id: Date.now().toString(),
        title: todoTitle,
        description: todoDescription,
        completed: false,
      })
    );

    setTodoTitle("");
    setTodoDescription("");
  };

  return (
    <div className="todo-add">
      <input
        onChange={onChangeTitle}
        value={todoTitle}
        type="text"
        placeholder="Title"
      />
      <input
        onChange={onChangeDescription}
        value={todoDescription}
        type="text"
        placeholder="Description"
      />
      <button onClick={onClickAdd}>Add Todo</button>
    </div>
  );
};

export default AddNewTodo;
