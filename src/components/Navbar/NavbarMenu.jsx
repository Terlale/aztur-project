import React from 'react';
import menuData from '../../data/data.json';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 25px;

  @media (max-width: 998px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    gap: 7px;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: gray;
  }
`;

const NavbarMenu = ({ onSelectPage }) => {
  const navigate = useNavigate();

  const handleMenuItemClick = (itemName) => {
    onSelectPage(itemName);
    switch (itemName) {
      case 'Haqqımızda':
        navigate('/about');
        break;
      case 'Xidmətlər':
        navigate('/services');
        break;
      case 'Aviabiletlər':
        navigate('/tickets');
        break;
      case 'Turlar':
        navigate('/tours');
        break;
      case 'Hotellər':
        navigate('/hotels');
        break;
      case 'Əlaqə':
        navigate('/connect');
        break;
      default:
        break;
    }
  };

  return (
    <MenuList>
      {menuData.Menu.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => handleMenuItemClick(item.name)}
        >
          {item.name}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default NavbarMenu;
