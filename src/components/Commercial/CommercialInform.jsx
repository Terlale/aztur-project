import React from "react";
import styled from "styled-components";
import Back from "../img/kevin.jpg";

const CommercialWrapper = styled.div`
  background-image: url(${Back});
  max-width: 100%;
  background-repeat: no-repeat;
  color: white;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 40px;

  }

  @media (max-width: 480px) {
    flex-direction: column; 
    align-items: center;
    gap: 20px; 
  }
`;

const InformStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const HeaderStyled = styled.div`
font-size: 45px;
font-weight: 600;

@media (max-width: 768px) {
    font-size: 30px;
    
  }
`;

const ParagraphStyled = styled.div`
font-size: 20px;
font-weight: 400;

@media (max-width: 768px) {
    font-size: 12px;
    
  }
`;

const CommercialInform = () => {
  return (
    <CommercialWrapper>
      <InformStyled>
        <HeaderStyled>10</HeaderStyled>
        <ParagraphStyled>Fəaliyyət ili</ParagraphStyled>
      </InformStyled>
      <InformStyled>
        <HeaderStyled>121</HeaderStyled>
        <ParagraphStyled>Milli mükafatlar</ParagraphStyled>
      </InformStyled>
      <InformStyled>
        <HeaderStyled>556</HeaderStyled>
        <ParagraphStyled>Peşəkar xidmət</ParagraphStyled>
      </InformStyled>
      <InformStyled>
        <HeaderStyled>700+</HeaderStyled>
        <ParagraphStyled>Hoteller</ParagraphStyled>
      </InformStyled>
      <InformStyled>
        <HeaderStyled>540+</HeaderStyled>
        <ParagraphStyled>İllik satış</ParagraphStyled>
      </InformStyled>
    </CommercialWrapper>
  );
};

export default CommercialInform;
