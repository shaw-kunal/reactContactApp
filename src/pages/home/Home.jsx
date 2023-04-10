import React from 'react'
import "./home.css"
import Navbar from '../../component/navbar/Navbar'
import Addcontact from '../../component/addcontact/Addcontact'



const Home = ({addContact}) => {
  return (
    <div className='homeContainer'>
    <Navbar/>
    <Addcontact addContact={addContact}/>
    </div>
  )
}

export default Home