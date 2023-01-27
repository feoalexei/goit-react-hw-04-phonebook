import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { AppContainer } from './App.styled';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  // Alternative way to load items from Local Storage on start
  // useEffect(() => {
  //   const contacts = localStorage.getItem(CONTACTS_KEY);
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts?.length) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = dataFromInput => {
    const newContact = {
      id: nanoid(),
      ...dataFromInput,
    };

    const nameAlreadyExists = contacts.find(
      contact => contact.name.toLowerCase() === dataFromInput.name.toLowerCase()
    );

    if (nameAlreadyExists)
      return alert(`${dataFromInput.name} is already in contacts`);

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const applyFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <AppContainer>
      <Box
        p={4}
        mb={4}
        border="1px solid #087582"
        borderRadius={4}
        display="flex"
        flexDirection="column"
      >
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={addContact} />
      </Box>
      <Box
        p={4}
        border="1px solid #087582"
        borderRadius={4}
        display="flex"
        flexDirection="column"
      >
        <h2>Contacts</h2>
        <Filter value={filter} onChange={applyFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Box>
    </AppContainer>
  );
};

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
//     const contacts = localStorage.getItem(CONTACTS_KEY);
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = contactFormInput => {
//     console.log(contactFormInput);
//     const newContact = {
//       id: nanoid(),
//       ...contactFormInput,
//     };

//     const { contacts } = this.state;

//     const nameAlreadyExists = contacts.find(
//       contact =>
//         contact.name.toLowerCase() === contactFormInput.name.toLowerCase()
//     );

//     if (nameAlreadyExists)
//       return alert(`${contactFormInput.name} is already in contacts`);

//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, newContact],
//       };
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(
//           contact => contact.id !== contactId
//         ),
//       };
//     });
//   };

//   applyFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;

//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <AppContainer>
//         <Box
//           p={4}
//           mb={4}
//           border="1px solid #087582"
//           borderRadius={4}
//           display="flex"
//           flexDirection="column"
//         >
//           <h1>Phonebook</h1>
//           <ContactForm
//             contacts={this.state.contacts}
//             addContact={this.addContact}
//           />
//         </Box>
//         <Box
//           p={4}
//           border="1px solid #087582"
//           borderRadius={4}
//           display="flex"
//           flexDirection="column"
//         >
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.applyFilter} />
//           <ContactList
//             contacts={filteredContacts}
//             deleteContact={this.deleteContact}
//           />
//         </Box>
//       </AppContainer>
//     );
//   }
// }
