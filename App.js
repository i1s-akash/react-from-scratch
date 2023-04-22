const parent = React.createElement("div", { id: "parentId" }, [
  React.createElement("div", { id: "firstChild" }, [
    React.createElement("h1", { id: "firstH1" }, "First H1"),
    React.createElement("h1", { id: "firstH1" }, "First H1"),
  ]),
  React.createElement("div", { id: "secondChild" }, [
    React.createElement("h1", { id: "thirdH1" }, "Third H1"),
    React.createElement("h1", { id: "thirdH1" }, "Fourth H1"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
