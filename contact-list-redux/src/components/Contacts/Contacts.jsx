import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeContact } from '../../actions/Actions';
import './Contacts.css';

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  return (
    <div className='contacts-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <Avatar name={contact.name} round={true} size='45' />
                {contact.name}
              </td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <div className='actions'>
                  <Link to={`/contacts/${contact.id}`}>
                    <i className='fas fa-user-edit'></i>
                  </Link>
                  <Link to='#'>
                    <i
                      className='fas fa-trash'
                      onClick={() => dispatch(removeContact(contact.id))}
                    ></i>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
