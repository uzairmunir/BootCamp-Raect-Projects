import React from 'react';
import { RepoItemProps } from '../../types/Types';
import './Repos.css';

type Props = {
  repo: RepoItemProps;
};

const RepoItem: React.FC<Props> = ({ repo }) => {
  return (
    <div className='repo-item'>
      <h3>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>
          {repo.name}
        </a>
      </h3>
      <h4>{repo.language}</h4>
    </div>
  );
};

export default RepoItem;
