import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { editContact, updateContact } from '../../actions/Actions';
import './EditContact.css';

const EditContact = () => {
  const { id } = useParams();
  const contact = useSelector((state) => state.contact);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (contact !== null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(editContact(id));
  }, [contact]);
  const UpdateContact = (e) => {
    e.preventDefault();
    const updatedContact = Object.assign(contact, {
      name: name,
      email: email,
      phone: phone,
    });
    dispatch(updateContact(updatedContact));
    navigate('/');
  };
  return (
    <div className='edit-contact-container'>
      <h1>Edit Contact</h1>
      <form onSubmit={UpdateContact}>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type='submit'>Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
