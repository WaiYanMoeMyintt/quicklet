import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
const App = ({ children }) => {
  return (
    <div className="parent_container">
      <main className="w-full">
        <div>
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default App;
