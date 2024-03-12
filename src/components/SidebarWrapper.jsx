import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoLogOutOutline } from "react-icons/io5";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Collection } from "../pages";
import { useState } from "react";

export const SidebarWrapper = ({ collections }) => {
  const [newCollectionName, setNewCollectionName] = useState("New Collection");
  const name = "amrit";
  return (
    <Sidebar
      g={{
        [`.${sidebarClasses.container}`]: {
          height: "100vh",
          borderWidth: "0px",
          position: "relative",
        },
      }}
    >
      <h1
        className="pl-8 text-3xl font-bold text-transparent bg-clip-text pt-7"
        style={{
          backgroundImage: `linear-gradient(to right, #5080ed, #bb6c9f, #d56675)`,
          backgroundSize: "100% 100%",
          animation: "gradientAnimation 5s ease-in-out infinite alternate",
        }}
      >
        Pocket-Drive
      </h1>
      <button className="flex items-center justify-center w-24 h-12 gap-2 my-5 ml-20 text-xl font-normal text-gray-600 bg-white rounded-lg shadow-md active:shadow-none">
        <FaPlus />
        New
      </button>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#020917",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/home" />}> Home </MenuItem>
        <SubMenu label="Collections">
          {collections.map((Collection, index) => (
            <MenuItem
              key={index}
              component={<Link to={`/collection${index + 1}`} />}
            >
              {" "}
              {Collection.name}{" "}
            </MenuItem>
          ))}
          <MenuItem>
            <div className="flex items-center gap-2">
              <input
                placeholder="+ New Collection"
                className="p-1 border-none rounded w-36 focus:border-transparent focus:outline-none"
                onChange={(e) => setNewCollectionName(e.target.value)}
              ></input>
              <button
                className="flex items-center justify-center w-8 h-8 border-2 rounded border-slate-300 active:border-black"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <TiTick />
              </button>
            </div>
          </MenuItem>
        </SubMenu>
      </Menu>

      <div className="absolute inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full bottom-36 left-24 dark:bg-gray-600">
        <span className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
          {name[0].toUpperCase()}
        </span>
      </div>
      <div className="absolute flex items-center justify-center w-full bottom-20">
        <button className="flex items-center justify-center w-32 h-12 gap-2 px-3 text-2xl font-normal text-gray-600 bg-white rounded-lg shadow-md active:shadow-none">
          <span className="text-3xl">
            <IoLogOutOutline />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </Sidebar>
  );
};
