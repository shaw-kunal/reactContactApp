import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { useState } from "react";

function App() {

  const allContact = [
    {
      sno:1,
      name:"kunal kumar shaw",
      contact:"6289197569"
    },
    {
      sno:2,
      name:"aniket kumar shaw",
      contact:"629389458"
    },
    {
      sno:3,
      name:"shital jaiswara ",
      contact:"69879456"
    },
    {
      sno:4,
      name:"barsha  shaw",
      contact:"62597896"
    }
  ];

  const [contacts, setContacts] = useState(allContact);


  // function for adding contact
  const addContact = (name, contactNo) => {
    let sno = contacts.length;
    console.log(sno + " adding it into array");
    const contactobj = {
      sno: sno,
      name: name,
      contact: contactNo,
    }
    console.log(contactobj)
    setContacts([...contacts,contactobj]); 
  }


  // function to delete the contact 
  const deleteContact=(item)=>
  { 
     console.log("contact delete" + item.sno);
    const newContact = contacts.filter((e) =>{
      return e !== item;
     });
  
     setContacts(newContact);

  }

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home
              addContact={addContact}
            />} />
            <Route path="contact"
              element={<Contact contacts={contacts}
               setContacts={setContacts}
               deleteContact={deleteContact} 
              
               />}

            />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
