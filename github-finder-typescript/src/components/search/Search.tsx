import React, { useContext, useState } from 'react';
import './Search.css';
import { GithubContext } from '../../context/github/GithubContext';
import { AlertContext } from '../../context/alert/AlertContext';

const Search = () => {
  const [text, setText] = useState('');
  const { searchUsers, users, clearUsers } = useContext(GithubContext);

  //   const { displayAlert } = useContext(AlertContext);

  //Function to Search Users
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      //   displayAlert('Please Enter a User Name', 'light');
      alert('Hello');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Search Here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {users.length > 0 && (
        <button onClick={clearUsers} className='clear-btn'>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
