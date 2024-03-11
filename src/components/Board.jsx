import React from "react";
import styles from "./css/index.module.css"
import {Routes, Route} from  "react-router-dom";
import CommonTask from "../pages/CommonTask";
import TaskPage from "../pages/TaskPage";
const Board = () => {
  const boardList = [
    { id: 0, name: "Daily", design: "#ff7452" },
    { id: 1, name: "In Progess", design: "#2684ff" },
    { id: 2, name: "In review", design: "#57d9a3" },
    { id: 3, name: "Completed", design: "#ffc400" },
  ];
   return (
     <div className={`${styles.board_container} ml-2 mt-6 px-4 w-full `}>
           <div className={`${styles.board_header} flex justify-between items-center`}>
                {boardList && boardList.map((board,index)=>(
                   <div key={index} className="flex cursor-pointer gap-2 items-center hover:underline">
                       <p className="w-1.5 h-1.5 rounded-lg" style={{backgroundColor:board?.design}}></p>
                       <h3 className = "text-white text-center">{board?.name}</h3>
                   </div>
                ))}
           </div>
     </div>
   )
};

export default Board;
