import React, { useState } from "react";
import logo from "../assets/menu.svg";
import { Link } from "react-router-dom";
import { sidebarData } from "../data/sidebarData";
import createBoard from "../assets/plus.svg";
import styles from "./css/index.module.css";
import moon from "../assets/half-moon.svg";
import sun from "../assets/sun-light.svg";
const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const darkmodeIcons = [
    { id: 0, name: sun },
    { id: 1, name: moon },
  ];
  const [currentindex, setCurrentIndex] = useState(0);
  console.log(currentindex);
  return (
    <nav
      className={`${styles.nav} ${
        menu ? styles.active_menu : styles.active_menu.menu
      } h-screen w-80 rounded-lg py-4 px-2.5  flex flex-col justify-between `}
    >
      <div className="nav_menu_holder">
        <div
          className={`${styles.sidebar_nav} flex flex-1 justify-between items-center gap-4 py-0 px-2.5 mb-4`}
        >
          <Link to="/">
            <h3>Quizlet</h3>
            <p>Focus.Manifest.Do</p>
          </Link>
          <div onClick={() => setMenu((prev) => !prev)}>
            <img
              className="cursor-pointer"
              src={logo}
              alt="menu"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={`${styles.sidebar_link_container}`}>
          {sidebarData.map((links, index) => (
            <Link
              to={links.path}
              className={`${styles.sidebar_links} cursor-pointer`}
              key={index}
            >
              <img width={30} height={30} src={links.src} />
              <p className="text-white">{links.title}</p>
            </Link>
          ))}
        </div>
        <div className={`${styles.create_board_container} cursor-pointer`}>
          <img
            alt="create"
            src={createBoard}
            className="cursor-pointer"
            width={30}
            height={30}
          />
          <p className="text-white">Add new board</p>
        </div>
      </div>
      <div
        className={`flex ${styles.dark_mode} justify-between items-center  gap-0`}
      >
        {darkmodeIcons.map((icon, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            className="py-2.5 px-4"
            key={index}
          >
            {icon.id === index ? (
              <img className={icon.id === currentindex ? `${styles.darkIcon}` : `${styles.darkIconBlind}`} src={icon.name} />
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
