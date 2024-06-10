import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { appRequired, appState, todoList } from "../Types/Type";

export type contextType = {
  page: ReactNode; //for routing
  setPage: Dispatch<SetStateAction<ReactNode>>; //for routing
  state: appState; //for props
  getState: appRequired[]; //for props
  // getTodo: todoList[];
};

export const Context = createContext<contextType | null>(null);
