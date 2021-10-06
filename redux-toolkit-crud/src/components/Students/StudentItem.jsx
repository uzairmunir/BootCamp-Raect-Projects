import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeStudent } from '../../redux/features/StudentSlice';
import './Students.css';

const StudentItem = ({ student }) => {
  const dispatch = useDispatch();
  return (
    <div className='student-card'>
      <div className='name-div'>
        <h3>{student.name}</h3>
        <Link to={`/${student.id}`}>
          <i className='fas fa-eye'></i>
        </Link>
      </div>
      <div className='info-div'>
        <h5>{student.department}</h5>
        <h5>{student.email}</h5>
        <h5>{student.phone}</h5>
      </div>
      <div className='btn-div'>
        <Link to={`/student/edit/${student.id}`}>
          <i className='far fa-edit btn'></i>
        </Link>
        <i
          className='fas fa-trash btn'
          onClick={() => dispatch(removeStudent(student.id))}
        ></i>
      </div>
    </div>
  );
};

export default StudentItem;
