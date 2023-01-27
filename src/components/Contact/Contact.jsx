import PropTypes from 'prop-types';
import { StyledContact, ContactIcon, DeleteBtn } from './Contact.styled';

const Contact = ({ contact, deleteContact }) => {
  return (
    <StyledContact>
      <p className="contactName">
        <ContactIcon />
        {contact.name}: {contact.number}
      </p>
      <DeleteBtn
        className="deleteContactBtn"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </DeleteBtn>
    </StyledContact>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
