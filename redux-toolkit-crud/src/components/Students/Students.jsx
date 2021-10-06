import React from 'react';
import { useSelector } from 'react-redux';
import StudentItem from './StudentItem';
import './Students.css';

const Students = () => {
  const students = useSelector((state) => state.student.students);
  console.log(students);
  return (
    <div className='students-container'>
      {students.map((student, index) => (
        <StudentItem student={student} key={index} />
      ))}
    </div>
  );
};

export default Students;
