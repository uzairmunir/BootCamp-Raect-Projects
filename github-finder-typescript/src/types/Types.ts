export type initialStateType = {
  users: [];
  userDetail: object | UserDetailProps;
  repos: [];
  loading: boolean;
  searchUsers: (text: string) => void;
  getRepos: (text: string) => void;
  getUserDetail: (text: string) => void;
  clearUsers: () => void;
  setLoading: () => void;
};

export enum Types {
  SEARCH_USERS = 'SEARCH_USERS',
  GET_USER = 'GET_USER',
  CLEAR_USERS = 'CLEAR_USERS',
  GET_REPOS = 'GET_REPOS',
  SET_LOADING = 'SET_LOADING',
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
}
export type resType = {
  data: {
    total_count?: number;
    incomplete_results?: boolean;
    items?: [];
  };
};
export type Actions =
  | { type: Types.SEARCH_USERS; payload: resType }
  | { type: Types.GET_USER; payload: resType }
  | { type: Types.CLEAR_USERS }
  | { type: Types.GET_REPOS; payload: resType }
  | { type: Types.SET_LOADING };

export type UserItemProps = {
  login: string;
  avatar_url: string;
};
export type UserDetailProps = {
  name: string;
  company: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
};
export type RepoItemProps = {
  html_url: string;
  name: string;
  language: string;
};

export type Users = {
  items: [{ login: string; avatar_url: string }];
};
export type UserDetail = {
  name: string;
  company: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
};
export type Repos = [
  {
    html_url: string;
    name: string;
    language: string;
  }
];
