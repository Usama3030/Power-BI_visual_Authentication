import { useContext, useState } from "react";
import { Context } from "../ContextApi/Context";
import SignIn from "./SignIn";

const Routing = () => {
  const context = useContext(Context);
  if (!context) return null;
  const { page, setPage } = context;
  console.log(":routing");

  return <button onClick={() => setPage(<SignIn />)}>Login</button>;
};
export default Routing;
