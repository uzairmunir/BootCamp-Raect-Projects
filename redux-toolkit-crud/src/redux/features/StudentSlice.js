import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: [
      {
        id: 1,
        name: 'Uzair Munir',
        email: 'uzair8825@gmail.com',
        department: 'CS & IT',
        phone: '03026600578',
      },
      {
        id: 2,
        name: 'Uzair Munir',
        email: 'uzair8825@gmail.com',
        department: 'CS & IT',
        phone: '03026600578',
      },
    ],
    student: {
      name: '',
      email: '',
      department: '',
      phone: '',
    },
  },
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    getStudent: (state, action) => {
      state.student = state.students.find(
        (student) => student.id == action.payload
      );
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((student) =>
        student.id == action.payload.id ? action.payload : student
      );
    },
  },
});

export const { addStudent, removeStudent, getStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
