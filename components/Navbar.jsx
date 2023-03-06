import React,{useState} from 'react';
import '../CSS/navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import { IconContext } from 'react-icons';


const Navbar = () => {
  const [sidebar,setSidebar] = useState(false);

  


  const showSidebar = () => setSidebar(!sidebar);
  const toggle = document.getElementById('toggle');
  const sidebar2= document.getElementById('sidebar');
  document.onClick = function(e){
    if(e.target.id !== 'FaIcons.FaBars'&& e.target.id !== 'toggle') {
      toggle.classList.remove('nav-menu active');
      sidebar2.classList.remove('');
    }
  }
  
  return (
    
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
  
}

export default Navbar