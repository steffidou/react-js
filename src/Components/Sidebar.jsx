import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const activeClass = 'rounded-md bg-white text-black p-2';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
        ]);
        
  
        return (
                <ul>
                {[...sideBarArray].map(([key, value]) => (
                  <li key={value} className="mb-2">
                    <NavLink
                      exact= "true"
                      to={value}
                      className={`text-black-500 ${location.pathname === value ? activeClass : ''}`}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
          
        );
     }
     
    return (
      <aside className="bg-violet-300 w-64 px-4 py-8">
        <h2 className="text-lg text-black font-bold mb-4">SIDEBAR</h2>
        {NavLinkFunction()}
      </aside>
    );
  }
  
export default Sidebar