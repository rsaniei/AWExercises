import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import RenderCounter from "./pages/RenderCounter";
import LoadContextProvider from "./LoadContext";
import ImageToggleOnMouseOver from "./components/ImageToggleOnMouseOver";

ReactDOM.render(
  <ImageToggleOnMouseOver
    primaryImage="./static/student.jpeg"
    secondaryImage="./static/bw/student.jpeg"
  ></ImageToggleOnMouseOver>,
  // <RenderCounter></RenderCounter>,
  // <LoadContextProvider>
  //   <App />
  // </LoadContextProvider>,
  document.getElementById("root")
);
