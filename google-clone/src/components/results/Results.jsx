import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ApiContext } from '../../context/ApiContext';
import SearchedData from './search-data/SearchedData';
import SearchedImages from './searched-imges/SearchedImages';
import SearchedNews from './searched-news/SearchedNews';
import ReactLoading from 'react-loading';

const Results = () => {
  const { data, term, getData, loading } = useContext(ApiContext);
  const location = useLocation();
  useEffect(() => {
    if (term !== '') {
      if (location.pathname === '/videos') {
        getData(`/search`, `${term} videos`);
      } else {
        getData(location.pathname, `${term}&num=100`);
      }
    }
  }, [location.pathname, term]);

  if (loading) {
    return (
      <ReactLoading
        type={'bars'}
        color={'#333'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
          height: '5rem',
          width: '5rem',
        }}
      />
    );
  }
  console.log(data);

  switch (location.pathname) {
    case '/search': {
      return <SearchedData searchedData={data} />;
    }
    case '/images': {
      return <SearchedImages searchedImages={data} />;
    }
    case '/news': {
      return <SearchedNews searchedNews={data} />;
    }
    default: {
      return 'ERROR....';
    }
  }
};

export default Results;
