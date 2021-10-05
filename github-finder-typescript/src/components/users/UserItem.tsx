import React from 'react';
import './Users.css';
import { Link } from 'react-router-dom';
import { UserItemProps } from '../../types/Types';

type Props = {
  userItem: UserItemProps;
};

const UserItem: React.FC<Props> = ({ userItem }) => {
  return (
    <Link to={`/user/${userItem.login}`}>
      <div className='user-card'>
        <img src={userItem.avatar_url} alt='user-img' className='user-img' />
        <h2>{userItem.login}</h2>
      </div>
    </Link>
  );
};

export default UserItem;
