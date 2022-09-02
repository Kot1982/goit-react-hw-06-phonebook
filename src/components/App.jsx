// import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts, getFilteredContact, filterContact, deletedContact } from 'redux/contactSlice';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  //   )
  // })
  // const [filter, setFilter] = useState('');
    
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);
  
  const dispatch = useDispatch();
  const contactItems = useSelector(getContacts);
  const filteredItems = useSelector(getFilteredContact);

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };

  //         if (
  //       contacts.find(
  //         contact => contact.name.toLowerCase() === name.toLowerCase()
  //       )
  //     ) {
  //       return alert(`${name} is already in contacts!`);
  //     }
  //     return setContacts([contact, ...contacts]);
    
  // };

  const addNewContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    }

    if (
      contactItems.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts!`)
    } 
    return dispatch(addContact(newContact));
  }

  // const onChangeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };
  const onChangeFilter = event => {
    return dispatch(filterContact(event.target.value))
  }

  // const currentContacts = () => {
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };
  const currentContacts = () => {
  return contactItems.filter(el => el.name.toLowerCase().includes(filteredItems.toLowerCase()))
}

  // const deleteContact = contactId => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
  //   );
  // };
  const deleteContact = newContactId => {
    return dispatch(deletedContact(newContactId));
  }
  
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addNewContact} />
          <h2>Contacts</h2>
          <Filter filter={filteredItems} onChange={onChangeFilter} />
          <ContactList
            contacts={currentContacts()}
            onDeleteContact={deleteContact}
          />
        </div>
      </>
    );
  
}
