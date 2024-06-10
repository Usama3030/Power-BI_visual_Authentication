import { useContext, useState } from "react";
import { Context } from "../ContextApi/Context";
import { userAuth } from "../Types/Type";
import Home from "./Home";

const SignIn: React.FC = () => {
  const RecievedData = useContext(Context);
  // console.log(RecievedData);
  if (!RecievedData) return null;
  const { page, setPage, getState } = RecievedData; //destructuring
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(name, email, password);
    const user: userAuth | null = getState?.find(
      (data) => data.email === email && data.password === password
    );
    if (user) {
      console.log("Success");
      setPage(<Home />);
    } else {
      console.log("Failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "40%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
        >
          Sign In
        </h2>
        {/* <input
          type="text"
          name="name"
          placeholder="e.g: Elon Musk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            display: "block",
            width: "100%",
            boxSizing: "border-box",
          }}
        /> */}
        <input
          type="email"
          name="email"
          placeholder="e.g: elonmusk@mars.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            display: "block",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="...."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            display: "block",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
        <button
          style={{
            margin: "20px 0 0 0",
            padding: "10px 20px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            width: "100%",
            boxSizing: "border-box",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignIn;
