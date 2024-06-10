import { useState } from "react";
import { appState } from "../Types/Type";

let updateCallback: (newState: appState) => void = null;

export const update = (newState: appState) => {
  if (typeof updateCallback === "function") {
    updateCallback(newState);
  }
};
const useApp = () => {
  const [state, setState] = useState<appState | null>(null);
  updateCallback = (newState: appState) => {
    setState(newState);
  };
  return { state };
};

export default useApp;
