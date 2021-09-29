import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ findContact, removeContact }) => {
  return (
    <ul>
      {findContact().map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <button type="button" id={contact.id} onClick={removeContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  findContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};
