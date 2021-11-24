import React from 'react';
import './SearchedData.scss';

const SearchedData = ({ searchedData }) => {
  return (
    <div className='search-container'>
      {searchedData?.results?.map((data, index) => (
        <div className='searched-data' key={index}>
          <a href={data.link} target='_blank' rel='noreferrer'>
            <h5>
              {data?.link.length > 30
                ? data?.link.substring(0, 30)
                : data?.link}
            </h5>
            <p>{data.title}</p>
          </a>
          <p>{data?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchedData;
