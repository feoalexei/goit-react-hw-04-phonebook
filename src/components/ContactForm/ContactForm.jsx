import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { StyledContactForm, AddBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledContactForm onSubmit={this.submitHandler}>
        <Box my={4} display="flex" justifyContent="space-between">
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.changeHandler}
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number:
            <input
              type="tel"
              name="number"
              onChange={this.changeHandler}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </Box>
        <AddBtn>Add contact</AddBtn>
      </StyledContactForm>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;
