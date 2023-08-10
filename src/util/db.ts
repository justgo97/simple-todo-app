import Dexie from "dexie";
import { ITodo } from "../types";

class simpleTodosDatabase extends Dexie {
  todos!: Dexie.Table<ITodo, string>;

  constructor() {
    super("simpleTodosDatabase");

    this.version(2).stores({
      todos:
        "id, title, description, completed, order, date_created, date_modified",
    });
  }
}

const db = new simpleTodosDatabase();

export const dbFuncs = {
  createTodo: (data: ITodo) => {
    return db.todos.add(data);
  },
  saveTodo: (data: ITodo) => {
    const key = data.id;

    return db.todos.update(key, data);
  },
  loadTodos: () => {
    return db.todos.toArray();
  },
  deleteTodo: (id: string) => {
    return db.todos.delete(id);
  },
};
