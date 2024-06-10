import { useState } from "react";
import { appState } from "../Types/Type";

let updateCallback: (newTodo: appState) => void = null;

export const update = (newTodo: appState) => {
  if (typeof updateCallback === "function") {
    updateCallback(newTodo);
  }
};
const useTodo = () => {
  const [todoState, setTodoState] = useState<appState | null>(null);
  updateCallback = (newTodo: appState) => {
    setTodoState(newTodo);
  };
  return { todoState };
};

export default useTodo;
