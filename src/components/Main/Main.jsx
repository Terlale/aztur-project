import React from "react";
import styled from "styled-components";
import { GiWorld, GiCommercialAirplane } from "react-icons/gi";
import { LuBuilding2 } from "react-icons/lu";
import Image from "../img/tom-barrett-M0AWNxnLaMw-unsplash 1.jpg";
import Header from "../Header/Header";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 0 25px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatisticItem = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  @media screen and (max-width: 300px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ImageStyled = styled.img`
  max-width: 100%;
  @media screen and (max-width: 768px) {
  }
`;

const ResponsiveGiWorld = styled(GiWorld)`
  color: #09259a;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ResponsiveLuBuilding2 = styled(LuBuilding2)`
  color: #09259a;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ResponsiveGiCommercialAirplane = styled(GiCommercialAirplane)`
  color: #09259a;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Main = () => {
  const head = "NİYƏ BİZ ?";

  return (
    <MainContainer>
      <TextContainer>
        <Header text={head} />
        <p style={{ fontSize: "14px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <StatisticsContainer>
          <StatisticItem>
            <div>
              <ResponsiveGiWorld />
            </div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>325</div>
              <div style={{ fontSize: "14px" }}>Turlar</div>
            </div>
          </StatisticItem>
          <StatisticItem>
            <div>
              <ResponsiveLuBuilding2 />
            </div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>847</div>
              <div style={{ fontSize: "14px" }}>Hotel</div>
            </div>
          </StatisticItem>
          <StatisticItem>
            <div>
              <ResponsiveGiCommercialAirplane />
            </div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>436</div>
              <div style={{ fontSize: "14px" }}>Uçuş</div>
            </div>
          </StatisticItem>
        </StatisticsContainer>
      </TextContainer>
      <ImageContainer>
        <ImageStyled src={Image} alt="" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Main;
