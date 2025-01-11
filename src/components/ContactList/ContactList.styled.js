import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  :hover {
    background-color: blue;
  }
`;

export const ListItems = styled.li`

    flex-basis: calc((100% - 32px) / 3);
    
`;