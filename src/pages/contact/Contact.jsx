import React, { useState } from 'react'
import "./contact.css"
import Navbar from '../../component/navbar/Navbar'
import { Person, Phone } from '@mui/icons-material'



const Contact = ({ contacts, setContacts, deleteContact }) => {

  const [edit, setEdit] = useState(false);
  const [econtact, seteContact] = useState(
    {
      sno: "",
      name: "",
      contact: ""
    });

  const editContact = (item) => {
    setEdit(true);
    console.log("edit cont act call")
    seteContact(item);
  }

  const onchange = (e, attr) => {
    seteContact((prevstate) => {
      return {
        ...prevstate,
        [attr]: e.target.value
      };
    });
    console.log(econtact);
  }

  const save = () => {

    console.log("save method call");
    console.log(econtact);
   
    const updateContact= contacts.map((item)=>
    {
      if(item.sno === econtact.sno)
      return econtact;
      else
    return item;
    });
    setContacts(updateContact);
    console.log(updateContact);

    setTimeout(() => {
      setEdit(!edit);
    }, 2000);



  }


  return (
    <div>
      <Navbar />

      <div className='ContactContainer'>
        <div className="contactWrapper">
          <h2>you contact List</h2>
          { contacts.map((item) => (
            <div key={item.sno} className="showContact">
              <div className="eachContact">
                <h3><Person />{item.name}</h3>
                <p><Phone />{item.contact}</p>

              </div>
              <button onClick={() => { editContact(item) }} className='edit'>edit</button>
              <button onClick={() => { deleteContact(item) }} className='delete'>delete</button>
            </div>
          ))
          }

        </div>
        {edit &&
          <div className="editContact">
            <div className="editWrapper">
            <h2>Edit Contact</h2>
              <div className='contactItem'><label>username</label>
                <input type="text" value={econtact.name} onChange={(e) => onchange(e, "name")} /></div>
              <div className='contactItem'><label>contact</label>
                <input type="text" value={econtact.contact} onChange={(e) => onchange(e, "contact")} /></div>
              <button onClick={save}>save</button>
            </div>
          </div>}



      </div>


    </div>
  )
}

export default Contact