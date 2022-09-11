import logo from './logo.svg';
import './App.css';
import CreateForm from './comps/createForm';
import ContactList from './comps/contactList';
import { useState } from 'react';

function App() {

  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)
  return (
    <div className="App d-flex">

      <CreateForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
