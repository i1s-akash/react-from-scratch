import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header"; //Named export
import Body from "./Components/Body";
// import "./index.css";

const AppLayout = () => {

  return (
    <div>
      <h1 className="react">Hey, Let's bonfires with React Celebration! </h1>
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
