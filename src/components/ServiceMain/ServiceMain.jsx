import React from "react";
import styled from "styled-components";
import { FaHotel, FaPeopleGroup } from "react-icons/fa6";
import { GiTicket, GiCommercialAirplane, GiCargoShip } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";
import { MdCarRental } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const StyledContainer = styled.div`
  padding: 60px;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;
const StyledAll = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const StyledIcon = styled.div`
  color: #1b1464;
  background-color: #ecebfa;
  font-size: 20px;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCol = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 10px;
`;

const StyledParagraph = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 0px 15px;
`;
const StyledHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;
const ServiceMain = () => {
  return (
    <StyledContainer>
      <StyledCol>
        <StyledAll>
          <StyledDiv>
            <StyledIcon>
              <FaHotel />
            </StyledIcon> 
            <StyledHeader>HOTELLƏR</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
          <StyledDiv>
            <StyledIcon>
              <GiTicket />
            </StyledIcon>
            <StyledHeader>AVİABİLETLƏR</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
        </StyledAll>
        <StyledAll>
          <StyledDiv>
            <StyledIcon>
              <GiCommercialAirplane />
            </StyledIcon>
            <StyledHeader>UÇUŞLAR</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
          <StyledDiv>
            <StyledIcon>
              <SiYourtraveldottv />
            </StyledIcon>
            <StyledHeader>XARİCİ VƏ DAXİLİ TURLAR</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
        </StyledAll>
      </StyledCol>
      <StyledCol>
        <StyledAll>
          <StyledDiv>
            <StyledIcon>
              <MdCarRental />
            </StyledIcon>
            <StyledHeader>RENT A CAR</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
          <StyledDiv>
            <StyledIcon>
              <GiCargoShip />
            </StyledIcon>
            <StyledHeader>SƏYAHƏT</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
        </StyledAll>
        <StyledAll>
          <StyledDiv>
            <StyledIcon>
              <FaPeopleGroup />
            </StyledIcon>
            <StyledHeader>GRUP TURLAR</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
          <StyledDiv>
            <StyledIcon>
              <RiSecurePaymentFill />
            </StyledIcon>
            <StyledHeader>SIĞORTA</StyledHeader>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry…
            </StyledParagraph>
          </StyledDiv>
        </StyledAll>
      </StyledCol>
    </StyledContainer>
  );
};

export default ServiceMain;
