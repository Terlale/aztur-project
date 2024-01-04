import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px 0 0 5px;
  outline: none;
  background-color:transparent;
  color : white;

  &::placeholder {
    color: white;
}
`;

const SearchIcon = styled.div`
  background-color: transparent;
  color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SearchButton = () => {
  return (
    <SearchButtonContainer>
      <SearchInput type="text" placeholder="Search..." />
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
    </SearchButtonContainer>
  );
};

export default SearchButton;
