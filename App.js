const heading1 = React.createElement(
    "h1",
    { id: "title" },
    "helllo everyOne!!"
  );
  const heading2 = React.createElement(
    "h2",
    { id: "title" },
    "helllo everyOne!!"
  );
  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root element of html file
  root.render(container);