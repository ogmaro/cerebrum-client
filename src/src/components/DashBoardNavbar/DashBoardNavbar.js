import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
//import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './DashBoardNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons'


function DashBoardNavbar(){

  const [sidebar,setSidebar] = useState(false);

  const showSidebar = () =>setSidebar(!sidebar)
    
  return (
    <>
     <div className="navbar">

      <div className="header_container">
  <div className="header">
    <a href="javascript"className="avatar rounded-circle">
      <img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" className="img1" alt="img"/>
      </a>
    </div>
    <div className="john_container">
      <p className="doe">John Doe</p>
      <p className="email">email@johndoedox.com></p>
      <button type="submit" className="edit"><FontAwesomeIcon icon={faEdit} />Edit Profile</button>
      </div>
  </div>




     <Link to ="#" className="menu-bars">
     <FaIcons.FaBars onClick={showSidebar}/>
     </Link>
     </div>
     <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
     <ul className='nav-menu-items' onClick={showSidebar}>
     <li className="navbar-toggle">
     <Link to="#" className='menu-bars'>

     </Link>
     </li>
       {SidebarData.map((item, index) => {
        return(
          <li key ={index} className={item.cName}>
          <Link to ={item.path}>
          {item.icon}
          <span>{item.title}</span>
          </Link>
          </li>
          );
       })}
     </ul>
     </nav>
    </>
    );
}

export default DashBoardNavbar;