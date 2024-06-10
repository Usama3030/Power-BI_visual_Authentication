import { useCallback, useContext } from "react";
import { Context } from "../ContextApi/Context";
import Home from "./Home";
import "./style.css";

const Todo = () => {
  const recievedData = useContext(Context);
  if (!recievedData) return null;

  const { page, setPage, getState } = recievedData;
  console.log("Todo", getState);
  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => setPage(<Home />)}>Back</button>
      </div>
      <div className="grid-container">
        {getState.map((user) => (
          <div className="card" key={user.id}>
            <ul>
              <li>
                <strong>ID:</strong> {user.id}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Title:</strong> {user.title}
              </li>
              <li>
                <strong>Description:</strong> {user.description}
              </li>
              <li>
                <strong>Done:</strong> {user.isCompleted}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
