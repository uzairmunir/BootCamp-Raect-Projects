import React from 'react';
import './SearchedNews.scss';

const SearchedVideos = ({ searchedNews }) => {
  return (
    <div className='news-container'>
      {searchedNews?.entries?.map((data, index) => (
        <div className='news-info'>
          <a href={data?.link} target='_blank' rel='noreferrer'>
            <h4>{data?.source?.title}</h4>
            <p>{data?.title}</p>
            <h6>{data?.published}</h6>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchedVideos;
