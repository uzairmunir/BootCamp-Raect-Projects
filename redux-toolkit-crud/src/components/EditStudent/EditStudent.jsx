import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {
  editStudent,
  getStudent,
  updateStudent,
} from '../../redux/features/StudentSlice';
import './EditStudent.css';

const EditStudent = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const student = useSelector((state) => state.student.student);

  useEffect(() => {
    dispatch(getStudent(id));
    if (student !== '') {
      setName(student.name);
      setDepartment(student.department);
      setEmail(student.email);
      setPhone(student.phone);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = {
      name: name,
      department: department,
      email: email,
      phone: phone,
    };
    dispatch(updateStudent(updatedStudent));
    navigate('/');
  };

  return (
    <div className='add-contact-container'>
      <h1>Edit Student</h1>
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
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
