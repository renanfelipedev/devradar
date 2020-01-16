import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 330px;
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  border: 1px solid rgba(0, 0, 0, 0.02);

  &:hover {
    border: 1px solid #2a84dd;
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const Title = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333333;
  margin-bottom: 30px;
`;

export const Main = styled.main`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 1050px) {
      margin-left: 0px;
      margin-top: 20px;
  }
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style-type: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
