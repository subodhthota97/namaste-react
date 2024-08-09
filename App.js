import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 id = "heading"> Namaste react using JSX</h1>;

const HeadingComponent = () => {
  return <>
  {title}
  <h1> Namaste React using JSX</h1>  
  </>
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);