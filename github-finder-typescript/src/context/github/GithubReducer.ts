import { Types, Actions, Users, UserDetail, Repos } from './../../types/Types';

export const GithubReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case Types.SEARCH_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case Types.GET_USER: {
      return {
        ...state,
        userDetail: action.payload,
        loading: false,
      };
    }
    case Types.GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    case Types.CLEAR_USERS: {
      return {
        ...state,
        users: [],
        loading: false,
      };
    }
    case Types.SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};
