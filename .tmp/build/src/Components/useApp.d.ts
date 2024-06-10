import { appState } from "../Types/Type";
export declare const update: (newState: appState) => void;
declare const useApp: () => {
    state: appState;
};
export default useApp;
