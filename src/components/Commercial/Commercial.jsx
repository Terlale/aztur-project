import React from "react";
import styled from "styled-components";
import Back from "../img/kevin.jpg";

const CommercialWrapper = styled.div`
  background-image: url(${Back});
  width: 100%;
  background-repeat: no-repeat;
  color: white;
  height: 440px;
  display: flex;
  align-items: center;
  padding: 0px 60px;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  text-align: center;
  font-size: 220px;
  font-weight: 400;
  font-family: "Indie Flower", cursive;

  @media (max-width: 870px) {
    font-size: 120px;
  }

  @media (max-width: 420px) {
    font-size: 60px;
  }
`;

const RightContent = styled.div`
  width: 50%;
  gap: 14px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 480px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 196px;
  height: 50px;
  border-radius: 6px;
  border: 2px solid white;
  background-color: transparent;
  color: white;

 
`;

const Commercial = () => {
  return (
    <CommercialWrapper>
      <LeftContent>25%</LeftContent>
      <RightContent>
        <Title>Xüsusi təklif!</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting...
        </Description>
        <Button>Ətraflı</Button>
      </RightContent>
    </CommercialWrapper>
  );
};

export default Commercial;
