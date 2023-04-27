import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parentId" }, [
  React.createElement("div", { id: "firstChild" }, [
    React.createElement("h1", { id: "firstH1", key: "1" }, "First H1"),
    React.createElement("h1", { id: "firstH1", key: "2" }, "First H1"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
