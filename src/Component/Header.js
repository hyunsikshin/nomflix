import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 20;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.7);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  align-items: center;
`;

const ALink = styled(Link)`
  width: 50px;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <ALink to="/">Movies</ALink>
      </Item>
      <Item>
        <ALink to="/tv">TV</ALink>
      </Item>
      <Item>
        <ALink to="/search">Search</ALink>
      </Item>
    </List>
  </Header>
);
