import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getStudent } from '../../redux/features/StudentSlice';
import './StudentDetail.css';

const StudentDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  useEffect(() => {
    dispatch(getStudent(id));
  }, []);
  return (
    <div className='student-detail'>
      <h3>Name: {student.name}</h3>
      <h4>Department: {student.department}</h4>
      <h4>Email: {student.email}</h4>
      <h4>Phone: {student.phone}</h4>
      <Link to='/' className='back-btn'>
        <i className='fas fa-backward '></i>
      </Link>
    </div>
  );
};

export default StudentDetail;
