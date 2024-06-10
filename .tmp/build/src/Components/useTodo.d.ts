import { appState } from "../Types/Type";
export declare const update: (newTodo: appState) => void;
declare const useTodo: () => {
    todoState: appState;
};
export default useTodo;
