import RouteConfig from './components/routes/Routes';
import Search from './components/search/Search';
import React, { useContext } from 'react';
import { ApiContext } from './context/ApiContext';

const App = () => {
  const { loading } = useContext(ApiContext);
  return (
    <div>
      <Search />
      <RouteConfig />
    </div>
  );
};

export default App;
