import React from 'react';
import './SearchedImages.scss';

const SearchedImages = ({ searchedImages }) => {
  return (
    <div className='images-container'>
      {searchedImages?.image_results?.map((data, index) => (
        <div key={index} className='images-grid'>
          <a href={data?.link?.href} target='_blank' rel='noreferrer'>
            <img
              src={data?.image?.src}
              alt={data?.link?.title}
              loading='lazy'
            />
            <p>{data?.link?.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchedImages;
