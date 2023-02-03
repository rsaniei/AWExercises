import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

const App = () => {
  // state parameters and handlers
  const [tasks, setTask] = useState([
    { text: " milk" },
    { text: " egg" },
    { text: " bread" },
  ]);

  return (
    <div className="container">
      <Header title="Your tasks for today" />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
