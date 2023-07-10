export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
  date_created?: number;
  date_modified?: number;
}

export interface TodosList {
  [key: string]: ITodo;
}
