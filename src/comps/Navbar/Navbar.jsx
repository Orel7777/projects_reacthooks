
import "./Navbar.css";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { ImStatsBars } from "react-icons/im";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineMapsUgc } from "react-icons/md";
import { TbMapSouth } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiWeatherDownpour } from "react-icons/ti";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { GrTasks } from "react-icons/gr";
import { useState } from 'react';

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const onClickMove = () => {
toast.success('Move to Next App', {
position: "bottom-center",
theme: "light",
});
};

const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

const closeMenu = () => {
setMenuOpen(false);
};

return (
<div className="navbar">
  <div className="burger" onClick={toggleMenu}>
    <GiHamburgerMenu />
  </div>
  <ul className={`class_ul ${menuOpen ? 'active' : '' }`}>
    <li className="clas_li">
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }} to="/">
      <ImStatsBars /> AppGraph
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }} to="/maps">
      <SiGooglemaps /> Maps
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }} to="/maps2">
      <MdOutlineMapsUgc /> Maps2
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }}
      to="/addressSearch">
      <TbMapSouth /> Address Search
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }} to="/weather">
      <TiWeatherDownpour /> Weather
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }}
      to="/vodMovies">
      <BiSolidMoviePlay /> VodMovies
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }}
      to="/todolist">
      <MdOutlineFormatListNumbered /> AppToDo
      </Link>
    </li>
    <li>
      <Link onClick={()=>{onClickMove();closeMenu();}} style={{ textDecoration: "none", color: "black" }}
      to="/appContexToDo">
      <GrTasks /> AppContextToDo
      </Link>
    </li>
  </ul>
</div>
);
}