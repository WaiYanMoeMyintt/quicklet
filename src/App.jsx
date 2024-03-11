import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
const App = ({ children }) => {
  return (
    <div className="parent_container">
      <main className="w-full flex gap-1">
        <Sidebar  className = "flex-1"  />
        <Board/>
      </main>
    </div>
  );
};

export default App;
