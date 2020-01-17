import styled from 'styled-components';

export const RegisterForm = styled.form`
  margin-top: 20px;
`;

export const InputBlock = styled.div`
  margin-top: 0;

  &:nth-child(1) {
    margin-bottom: 20px;
  }
`;

export const InputGroup = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 32px;
  border: 0;
  border-bottom: 1px solid #eee;

  &:focus {
    border-bottom: 1px solid #c3c3c3;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  border-radius: 2px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #3399ff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #2a84dd;
  }
`;
