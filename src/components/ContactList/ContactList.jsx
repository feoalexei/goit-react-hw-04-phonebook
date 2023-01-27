import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import { StyledList } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </StyledList>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
}; 
