import React from 'react';

import {
  Dev,
  Header,
  UserImg,
  UserInfo,
  UserName,
  UserTechs,
  UserBio,
  Link
} from './styles';

export default function DevItem({ dev }) {
  return (
    <Dev className="dev-item">
      <Header>
        <UserImg src={dev.avatar_url} alt={dev.name} />
        <UserInfo className="user-info">
          <UserName>{dev.name}</UserName>
          <UserTechs className="techs">{dev.techs.join(', ')}</UserTechs>
        </UserInfo>
      </Header>
      <UserBio>{dev.bio}</UserBio>
      <Link
        href={`https://github.com/${dev.github_username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar perfil no github
      </Link>
    </Dev>
  );
}
