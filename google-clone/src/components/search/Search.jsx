import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import './Search.scss';

const Search = () => {
  const [text, setText] = useState('');
  const { setTerm, data, removeTerm } = useContext(ApiContext);
  const links = [
    { url: '/search', title: '🔎 All' },
    { url: '/images', title: '📸 Images' },
    { url: '/news', title: '📰 News' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Search Text is Empty');
    } else {
      setTerm(text);
    }
  };
  return (
    <div className={data ? 'searched' : 'search'}>
      <img
        src='https://proofmart.com/wp-content/uploads/2021/06/google-logo-web.png'
        alt='logo'
      />
      <div className='search-info-container'>
        <div className='input-container'>
          <i className='fas fa-search'></i>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
          <i className='fas fa-times' onClick={() => removeTerm()}></i>
        </div>
        {data && (
          <div className='links-info'>
            {links.map((link, index) => (
              <Link to={link.url} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      {!data && (
        <div className='btn-container'>
          <button>Google Search</button>
          <button>Feeling Lucky</button>
        </div>
      )}
    </div>
  );
};

export default Search;
