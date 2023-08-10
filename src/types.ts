export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
  order: number;
  date_created?: number;
  date_modified?: number;
}

export interface INewTodo {
  title: string;
  description: string;
  completed: boolean;
}

export interface TodosList {
  [key: string]: ITodo;
}
