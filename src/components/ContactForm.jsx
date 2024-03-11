import React, { useState } from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  marginBottom: '15px',
};

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = formData;
    onAddContact(name, number);
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <form style={containerStyle} onSubmit={handleSubmit}>
      <label>
        <h4>Name</h4>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
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
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
