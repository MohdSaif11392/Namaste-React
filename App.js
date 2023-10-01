// import React from "./react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Hello Everyone!"
// );
// // console.log(heading);

// const heading3 = <h1>How are you!</h1>; //JSX

// const heading2 = React.createElement(
//   "h2",
//   { id: "title2", key: "h2" },
//   "Welcome to Parcel"
// );

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
//   heading3,
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //passing the react element inside the root.
// // root.render(heading);
// // root.render(heading2);

// root.render(container);

//nested tags
const head = React.createElement(
  "div",
  { id: "parent" },
  "Hello Saif",
  [
    React.createElement(
      "div",
      { id: "child1" },
      [React.createElement("h1", {}, "this is h1 tag")], //siblings
      [React.createElement("h2", {}, "h2 tag")]
    ),
  ],
  [
    React.createElement(
      "div",
      { id: "child1" },
      [React.createElement("h1", {}, "this is h1 tag")], //siblings
      [React.createElement("h2", {}, "h2 tag")]
    ),
  ]
);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(head);
