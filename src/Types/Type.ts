export type appState = powerbi.DataView[];

export type appRequired = {
  id?: string;
  name?: string;
  email?: string;
  job?: string;
  password?: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
};

export type userAuth = {
  email?: string;
  password?: string;
};

export type todoList = {
  id?: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
};
