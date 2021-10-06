import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addStudent } from '../../redux/features/StudentSlice';
import './AddStudent.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.random(),
      name: name.toUpperCase(),
      department: department.toUpperCase(),
      email: email,
      phone: phone,
    };
    dispatch(addStudent(newStudent));
    setPhone('');
    setDepartment('');
    setName('');
    setEmail('');
    navigate('/');
  };
  return (
    <div className='add-contact-container'>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Enter Department'
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Enter Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type='submit'>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
