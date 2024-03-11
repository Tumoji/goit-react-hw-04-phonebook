import React, { Component } from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    marginBottom: '15px',
  };

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form style={containerStyle} onSubmit={this.handleSubmit}>
        <label>
          <h4>Name</h4>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>

        <label>
          <h4>Number</h4>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <div>
        <br />
          {' '}
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
