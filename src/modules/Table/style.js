import styled from 'styled-components';

export const Tables = styled.table`
  margin: 100px 0 0 70px;
  td {
    width: 200px;
    overflow: hidden;
    border-style: solid;
    border-width: 1px 0 1px 0;
    border-color: #000;
    :first-child {
      border-style: solid;
      border-width: 1px 0 1px 1px;
      border-color: #000;
    }
    :last-child {
      border-style: solid;
      border-width: 1px 1px 1px 0;
      border-color: #000;
    }
  }
`;
