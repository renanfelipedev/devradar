import styled from 'styled-components';

export const Dev = styled.li`
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.02);

  &:hover {
    border: 1px solid #8e4dff;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
`;

export const UserImg = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin-left: 10px;
`;

export const UserName = styled.strong`
  display: block;
  font-size: 16px;
  color: #333333;
`;

export const UserTechs = styled.span`
  font-size: 13px;
  color: #999999;
  margin-top: 2px;
`;

export const UserBio = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const Link = styled.a`
  color: #8e4dff;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    color: #5a2da6;
  }
`;
