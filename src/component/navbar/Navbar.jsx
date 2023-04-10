import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
 
      <div className="navbarWrapper">
        <ul>
          <li className="navbarITem">
            <Link className='navbarItem' to="/" >Home</Link>
          </li>
          <li className="navbarITem">   
           <Link className='navbarItem' to="/contact" >Your contact List</Link>
          </li>
        </ul>

      </div>

    </div>


  )
}

export default Navbar