import React from "react";
import styled from "styled-components";
import Logo from "./../img/aztur logo 1080 ağ 2.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <LogoContainer>
          <LogoImage src={Logo} alt="" />
          <SocialIcons>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </SocialIcons>
        </LogoContainer>
        <MenuContainer>
          <MenuList>
            <MenuTitle>Menyular</MenuTitle>
            <MenuItem>Haqqımızda</MenuItem>
            <MenuItem>Xidmətlər</MenuItem>
            <MenuItem>Aviabiletlər</MenuItem>
            <MenuItem>Turlar</MenuItem>
            <MenuItem>Otellər</MenuItem>
            <MenuItem>Əlaqə</MenuItem>
          </MenuList>
          <MenuList>
            <MenuTitle>Faydalı linklər</MenuTitle>
            <MenuItem>Tez-tez soruşulanlar</MenuItem>
            <MenuItem>Karyera</MenuItem>
            <MenuItem>Xidmət Şəbəkəsi</MenuItem>
          </MenuList>
          <MenuList>
            <MenuTitle>Əlavə məlumat</MenuTitle>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Təhlükəsizlik</MenuItem>
            <MenuItem>Şərtlər və qaydalar</MenuItem>
          </MenuList>
        </MenuContainer>
      </Container>
      <hr />
      <Copyright>© Copyright</Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: #f0f0f0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 60px 80px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

const LogoImage = styled.img`
  
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const SocialIcons = styled.div`
  color: #09259a;
  display: flex;
  gap: 14px;

  @media (max-width: 140px) {
    display:none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 2;

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  line-height: 30px;
  margin-top: 20px;
  flex: 1;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const MenuTitle = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const Copyright = styled.div`
  padding: 30px 130px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
    padding: 30px 0px;
  }
`;

export default Footer;
