import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, TodosList } from "../types";
import { dbFuncs } from "../util/db";

const initialState: TodosList = {};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<ITodo>) => {
      const newTodo = action.payload;
      newTodo.date_created = newTodo.date_modified = Date.now();
      state[newTodo.id] = { ...newTodo };
      dbFuncs.createTodo(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoID = action.payload;
      delete state[todoID];
      dbFuncs.deleteTodo(todoID);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoID = action.payload;
      state[todoID].completed = !state[todoID].completed;
      dbFuncs.saveTodo({ ...state[todoID] });
    },
    changeTodo: (state, action: PayloadAction<ITodo>) => {
      const { id, title, description } = action.payload;

      if (title !== undefined) {
        state[id].title = title;
      }

      if (description !== undefined) {
        state[id].description = description;
      }

      state[id].date_modified = Date.now();
    },
    todosLoaded: (_state, action: PayloadAction<TodosList>) => {
      return action.payload;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
