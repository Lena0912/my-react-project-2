

import initialContacts from "../components/data.json"
import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";



const App = () => {
  const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem("contacts");
  if (savedContacts) {
    return JSON.parse(savedContacts);
  } else {
    localStorage.setItem("contacts", JSON.stringify(initialContacts));
    return initialContacts;
  }
  });


  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);    
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
};
export default App;
