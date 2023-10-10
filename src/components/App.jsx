// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import contacts from '../components/data/contacts.json';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
 

  export function App () {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');
    const [localSt, setLocalSt] = useState(true);

    useEffect(() => {
          const contacts = localStorage.getItem('contacts');
          const parsedContacts = JSON.parse(contacts);
      
          if (parsedContacts) {
            setContacts([...parsedContacts]);
          }
    },[])

    useEffect(() => {
      if (localSt) {
        setLocalSt(false)
        return
      }
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);


// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() { 
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts});
//     }
//    }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

  const addContact = ({ name, number }) => {
    
    const hasContact = contacts.some(contact => contact.name === name);
    if (hasContact) {
      return alert(`${name} is already in contacts.`);
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prevState => [contact, ...prevState])
  };

  //   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const hasContact = contacts.some(contact => contact.name === name);
//     if (hasContact) {
//       return alert(`${name} is already in contacts.`);
//     }

//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

  const deleteContact = id => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== id),
    );
  };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

//   getVisibleContact = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

  const getVisibleContact = () => {
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

//   render() {
//     const visibleContacts = this.getVisibleContact();

//     return (
//       <section className={css.container}>
//         <h2 className={css.title}>Phonebook</h2>
//         <ContactsForm onSubmit={this.addContact} contacts={this.state} />
//         <h2 className={css.title}>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactsList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </section>
//     );
//   }
// }


    const visibleContacts = getVisibleContact();

    return (
      <section className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactsForm onSubmit={addContact} contacts={contacts} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </section>
    );
  }


