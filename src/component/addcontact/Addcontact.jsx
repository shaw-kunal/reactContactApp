import React, { useState } from 'react'
import "./addcontact.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Person } from '@mui/icons-material';


const Addcontact = ({ addContact }) => {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [error, seterror] = useState('');




  const submit = (e) => {
    e.preventDefault();
    if (!name || !contact)
      alert("name and contact should not be emmty");
    else {
      addContact(name, contact);
      alert('succesfully add contact');
      setTimeout(()=>{
        setName("");
        setContact("");
      },1000)

    }
  }

  return (
    <div className='contact'>

      <div className="contactContainer">

        <form action="" onSubmit={submit}>
        <h1>Add Contact</h1>
          <div className="username">
            <label htmlFor="name">Name</label>
            <Person className='personIcon icon' />
            <input type="text" id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="userContact">
            <label htmlFor="name">contact</label>
            <LocalPhoneIcon className='phoneicon icon' />
            <input type="tel" id=""

              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <button type='submit' className='addbtn'>Add</button>
        </form>

      </div>


    </div>
  )
}

export default Addcontact