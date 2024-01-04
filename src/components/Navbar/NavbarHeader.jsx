import React from 'react';
import styled from 'styled-components';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  font-weight: 600;
  padding: 65px;

  @media (max-width: 680px) {
    padding: 30px;
  }
`;
const StyleIcon = styled.div`
  font-size: 50px;
`;

const NavbarHeader = ({ selectedPage }) => {
  return (
    <HeaderContainer>
      <StyleIcon><GrFormPrevious/></StyleIcon>
      <div>{selectedPage}</div>
      <StyleIcon><GrFormNext/></StyleIcon>
    </HeaderContainer>
  );
}

export default NavbarHeader;
