import { useEffect, useState } from "react";

import "./App.scss";

// Import all of Bootstrap's JS
import "bootstrap";

import { dbFuncs } from "./util/db";
import { TodosList } from "./types";
import { useAppDispatch } from "./store";
import { todosActions } from "./store/todosReducer";

import LoadingSpinner from "./components/LoadingSpinner";
import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";

function App() {
  const [loadingState, setLoadingState] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //
    async function fetchData() {
      const userTodos = await dbFuncs.loadTodos();

      const initialTodos: TodosList = {};
      userTodos.forEach((todo) => (initialTodos[todo.id] = todo));

      dispatch(todosActions.todosLoaded(initialTodos));

      setLoadingState(false);
    }

    fetchData();
  }, [dispatch]);

  if (loadingState) {
    return <LoadingSpinner />;
  }

  return (
    <div className="todo">
      <h1>Simple Todo App</h1>

      <TodoList />
      <AddNewTodo />
    </div>
  );
}

export default App;
