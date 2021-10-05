import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { initialStateType, Types } from '../../types/Types';
import { GithubReducer } from './GithubReducer';

// Environment Variables
let githubClientId: any;
let githubClientSecret: any;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret = process.env.CLIENT_SECRET;
}
//Initial State
let initialState: initialStateType = {
  users: [],
  userDetail: {},
  repos: [],
  loading: false,
  searchUsers: () => {},
  getRepos: () => {},
  getUserDetail: () => {},
  setLoading: () => {},
  clearUsers: () => {},
};

// Creating Github Context
export const GithubContext = createContext(initialState);

//Github Provider
const GithubProvider: React.FC = ({ children }) => {
  let [state, dispatch] = useReducer(GithubReducer, initialState);
  // Function to Search Users
  const searchUsers = async (text: string) => {
    setLoading();
    let res: any = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: Types.SEARCH_USERS,
      payload: res.data.items,
    });
  };
  // Function to get User Detail
  const getUserDetail = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: Types.GET_USER,
      payload: res.data,
    });
  };
  //Function to Get User's Repos
  const getRepos = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=7&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: Types.GET_REPOS,
      payload: res.data,
    });
  };
  // Function to Clear Users Data
  const clearUsers = () => {
    dispatch({
      type: Types.CLEAR_USERS,
    });
  };
  //Function to Set Loading
  const setLoading = () => {
    dispatch({
      type: Types.SET_LOADING,
    });
  };

  //Context Values
  const contextValues = {
    searchUsers,
    getUserDetail,
    getRepos,
    clearUsers,
    setLoading,
    ...state,
  };

  return (
    <GithubContext.Provider value={contextValues}>
      {children}
    </GithubContext.Provider>
  );
};
export default GithubProvider;
