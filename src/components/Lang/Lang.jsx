import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

const LangButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #ffffff75;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1;
`;

const DropdownButton = styled.button`
  background-color: #f9f9f9;
  color: black;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  width: 100%;
  text-align: left;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Lang = () => {
  const [selectedLang, setSelectedLang] = useState('AZ');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <LangButton onClick={toggleDropdown}>
        <span>{selectedLang}</span>
        <IoIosArrowDown />
      </LangButton>
      {dropdownVisible && (
        <DropdownContainer>
          <DropdownButton onClick={() => handleLangChange('AZ')}>
            AZ
          </DropdownButton>
          <DropdownButton onClick={() => handleLangChange('EN')}>
            EN
          </DropdownButton>
          <DropdownButton onClick={() => handleLangChange('RU')}>
            RU
          </DropdownButton>
        </DropdownContainer>
      )}
    </div>
  );
};

export default Lang;
