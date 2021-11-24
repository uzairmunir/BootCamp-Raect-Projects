import React, { createContext, useReducer } from 'react';
import ApiReducer from './ApiReducer';

let initialState = {
  data: null,
  loading: false,
  term: '',
};
export const ApiContext = createContext(initialState);

const ApiContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(ApiReducer, initialState);

  const getData = async (url, term) => {
    setLoading();
    const config = {
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '4f7424d16fmshdd35e6de3695582p1d57fbjsna8fe8d73f9c8',
      },
    };
    let res = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1${url}/q=${term}`,
      config
    );
    let data = await res.json();
    dispatch({
      type: 'GET_DATA',
      payload: data,
    });
  };
  const setTerm = (text) => {
    dispatch({
      type: 'SET_TERM',
      payload: text,
    });
  };
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };
  const removeTerm = () => {
    dispatch({
      type: 'REMOVE_TERM',
    });
  };
  let contextValues = { getData, setTerm, removeTerm, ...state };

  return (
    <ApiContext.Provider value={contextValues}>{children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;
