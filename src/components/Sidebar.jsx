import React,{useState} from 'react'
import logo from "../assets/menu.svg";
import { Link } from 'react-router-dom';
import {sidebarData} from "../data/sidebarData";
import createBoard from "../assets/plus.svg";
import styles from "./css/index.module.css";
const Sidebar = () => {
  const [menu,setMenu] = useState(false);
  return (
    <nav className={`${styles.nav} h-screen w-80 rounded-lg py-4 px-2.5`}>
         <div className={`${styles.sidebar_nav} flex flex-1 justify-between items-center gap-4 py-0 px-2.5 mb-4`}>
               <Link to = "/">
                  <h3>Quizlet</h3>
                  <p>Focus.Manifest.Do</p>
               </Link>
               <div >
                  <img className='cursor-pointer' src = {logo} alt = "menu" width={30} height={30}/>
               </div>
         </div>
         <div className={`${styles.sidebar_link_container}`}>
           {sidebarData.map((links,index)=>(
             <Link  to = {links.path} className={`${styles.sidebar_links} cursor-pointer`} key={index}>
                  <img width={30} height={30} src = {links.src}/>
                  <p className='text-white'>{links.title}</p>
             </Link>
           ))}
         </div>
         <div className={`${styles.create_board_container} cursor-pointer`}>
             <img alt = "create" src = {createBoard} className='cursor-pointer' width={30} height={30}/>
             <p className='text-white'>Add new board</p>
         </div>
    </nav>
  )
}

export default Sidebar