import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Dispatch } from 'redux';
import { addNewContact } from '../../actions/Action';
import './AddContact.css';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: Math.random(),
      name: name,
      email: email,
      phone: phone,
    };
    dispatch(addNewContact(newContact));
    setPhone('');
    setName('');
    setEmail('');
    navigate('/');
  };
  return (
    <div className='add-contact-container'>
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
