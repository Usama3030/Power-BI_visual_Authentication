import { Dispatch, ReactNode, SetStateAction } from "react";
import { appRequired, appState } from "../Types/Type";
export type contextType = {
    page: ReactNode;
    setPage: Dispatch<SetStateAction<ReactNode>>;
    state: appState;
    getState: appRequired[];
};
export declare const Context: import("react").Context<contextType>;
