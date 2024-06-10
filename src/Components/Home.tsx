// import { useContext, useState } from "react";
// import { Context } from "../ContextApi/Context";
// import SignIn from "./SignIn";
// import Routing from "./Routing";
// import { appRequired, appState } from "../Types/Type";
// import Todo from "./Todo";

// // const data = (state: appState) => {
// //   const getState: appRequired[] = [];

// //   if (state) {
// //     const path = state[0].categorical.categories;
// //     for (let i = 0; i < path[0].values.length; i++) {
// //       const firstVariable = {};
// //       for (let j = 0; j < path.length; j++) {
// //         const name1: string = path[j].source.displayName.toString();
// //         const value1: string = path[j].values[i].toString();
// //         firstVariable[name1] = value1;
// //       }
// //       getState.push(firstVariable);
// //     }
// //   }

// //   return getState;
// // };

// const Home = () => {
//   const RecievedData = useContext(Context);
//   if (!RecievedData) return null;
//   //   const { page, setPage, state } = RecievedData;
//   //   console.log(state);
//   const { page, setPage, getState } = RecievedData;
//   console.log(getState);
//   //   const getState: appRequired[] = data(state);
//   //   console.log(getState);

//   return (
//     <>
//       {/* <Routing /> */}
//       <button onClick={() => setPage(<SignIn />)}>Logout</button>
//       <button onClick={() => setPage(<Todo />)}>Todo List</button>
//       {getState.map((user) => (
//         <ul key={user.id}>
//           <li>{user.email}</li>
//           <li>{user.job}</li>
//           <li>{user.name}</li>
//         </ul>
//       ))}
//     </>
//   );
// };

// export default Home;
import { useContext } from "react";
import { Context } from "../ContextApi/Context";
import SignIn from "./SignIn";
import Todo from "./Todo";
import "./style.css";

const Home = () => {
  const RecievedData = useContext(Context);
  if (!RecievedData) return null;

  const { page, setPage, getState } = RecievedData;

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => setPage(<SignIn />)}>Logout</button>
        <button onClick={() => setPage(<Todo />)}>Todo List</button>
      </div>
      <div className="grid-container">
        {getState.map((user) => (
          <div className="card" key={user.id}>
            <ul>
              <li>
                <strong>ID:</strong> {user.id}
              </li>
              <li>
                <strong>Name:</strong> {user.name}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Job:</strong> {user.job}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
