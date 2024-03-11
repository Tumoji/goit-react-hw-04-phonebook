import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
    marginLeft: '15px',
  };

  const listStyle = {
    padding: '10px',
  };

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li style={listStyle} key={contact.id}>
        <div>
          <strong>{contact.name}:</strong> {contact.number}
          <button style={buttonStyle} type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
        </div>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
