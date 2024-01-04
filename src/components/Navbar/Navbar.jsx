import React, { useState } from "react";
import Logo from "./../img/aztur logo 1080 ağ 1 (2).svg";
import Back from "./../img/azhar.jpg";
import NavbarIcon from "./NavbarIcon";
import Lang from "../Lang/Lang";
import SearchButton from "../Search/SearchButton";
import NavbarMenu from "./NavbarMenu";
import NavbarHeader from "./NavbarHeader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "../Search/SearchForm";

const NavbarContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: 100%;
  background-repeat: no-repeat;
  color: white;
  padding: 20px 0px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 85px;

  @media (max-width: 998px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  width: 40%;
  text-align: right;

  @media (max-width: 998px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  width: 60%;
  padding: 0px 150px 0px 25px;

  @media (max-width: 998px) {
    width: 100%;
    padding: 0px 20px;
  }
`;

const ContectNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;

  @media (max-width: 998px) {
    justify-content: center;
  }
`;

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const navigate = useNavigate();

  const handlePageChange = (pageName) => {
    setSelectedPage(pageName);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <NavbarContainer backgroundImage={Back}>
      <FlexContainer>
        <LogoContainer>
          <img src={Logo} alt="" onClick={goHome} />
        </LogoContainer>
        <ContentContainer>
          <ContectNav>
            <NavbarIcon />
            <Lang />
            <SearchButton />
          </ContectNav>
          <hr style={{ margin: "10px 0px" }} />
          <div>
            <NavbarMenu onSelectPage={handlePageChange} />
          </div>
        </ContentContainer>
      </FlexContainer>
      <div>
        <NavbarHeader selectedPage={selectedPage} />
      </div>
      <div><SearchForm/></div>
    </NavbarContainer>
  );
};

export default Navbar;
