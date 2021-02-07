import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Dashboard_navbar.css';


function Dashboard_navbar(){

  const [sidebar,setSidebar] = useState(false);

  const showSidebar = () =>setSidebar(!sidebar)
    
  return (
    <>
     <div className="navbar">

      <div className="header_container">
  <div className="header">
    <a href="javascript"className="avatar rounded-circle">
      <img alt="image-placeholder" src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" class="img1" alt="img"/>
      </a>
    </div>
    <div className="john_container">
      <h3 className="doe">John Doe</h3>
      <p className="email">email@johndoedox.com></p>
      <button>Edit Profile</button>
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
     <AiIcons.AiOutlineClose />
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

export default Dashboard_navbar;