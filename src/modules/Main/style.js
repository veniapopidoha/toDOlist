import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CreateConteiner = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 50px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ error, empty }) => (empty ? (error ? 'red' : '#000') : '#000')};
`;
export const Title = styled.h1``;

export const Error = styled.h3`
  color: red;
`;

export const Button = styled.button`
  height: 30px;
  margin-top: 75px;
`;
