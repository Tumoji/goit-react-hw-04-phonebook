import React from 'react';

const ContactListItem = ({ contact }) => {
  return (
    <li>
      <strong>{contact.name}:</strong> {contact.number}
    </li>
  );
};

export default ContactListItem;
