import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <h2>About</h2>
      <p>
        This project was built for practice purposes using{' '}
        <strong>Context API</strong> by React.
      </p>
      <a href='https://github.com/uzairmunir'>
        <i className='fab fa-github git-icon'></i>
      </a>
    </div>
  );
};

export default About;
