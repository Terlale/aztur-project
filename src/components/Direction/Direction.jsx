import React, { useState, useEffect } from "react";
import DirectionData from "../../data/DirectionData";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import styled from "styled-components";

const DirectionContainer = styled.div`
  display: flex;
`;

const DirectionGroup = styled.div`
// @media (max-width: 768px) {
//   flex-direction: column;
// }
`;

const DirectionItem = styled.div`
  position: relative;
  // @media (min-width: 768px) {
  //   width: 33.33%;
  // }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: -6px;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #ffe500;
`;
const StyledHeader = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
const StyledTemperature = styled.p`
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
    padding: 5px 15px;

  .icon {
    font-size: 24px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 337px;
  margin-top: 55px;

  @media (max-width: 2100px) {
    display: none;
  }
`;
const IconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
    padding: 5px 15px;

  .icon {
    font-size: 24px;
  }
`;

const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540px;
  margin-top: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const OverlayText = styled.div`
  position: absolute;
  color: white;
  top: 0%;
  left: 0%;
`;

const Direction = () => {
  const [popularTrueDirection, setPopularTrueDirection] = useState([]);
  const [popularDirection, setPopularDirection] = useState([]);
  const [falseDirection, setFalseDirection] = useState([]);

  useEffect(() => {
    setPopularTrueDirection(DirectionData.trueData);
    setPopularDirection([...DirectionData.trueData2]);
    setFalseDirection(DirectionData.falseData);
  }, []);

  return (
    <DirectionContainer>
      <DirectionGroup>
        {popularTrueDirection.map((direction) => (
          <DirectionItem key={direction.id}>
            <ImageContainer>
              <Image src={direction.img} alt={direction.country} />
              <OverlayText>
                <StyledIcon>
                  <div>
                    <LiaTemperatureHighSolid className="icon" />
                  </div>
                  <StyledTemperature>{direction.temperature}</StyledTemperature>
                </StyledIcon>
                <StyledText>
                  <StyledParagraph>{direction.country}</StyledParagraph>
                  <StyledHeader>{direction.city}</StyledHeader>
                </StyledText>
              </OverlayText>
            </ImageContainer>
          </DirectionItem>
        ))}
      </DirectionGroup>

      <DirectionGroup>
        {falseDirection.map((direction) => (
          <DirectionItem key={direction.id}>
            <ImageContainer>
              <Image src={direction.img} alt={direction.country} />
              <OverlayText>
                <IconStyled>
                  <div>
                    <LiaTemperatureHighSolid className="icon" />
                  </div>
                  <StyledTemperature>{direction.temperature}</StyledTemperature>
                </IconStyled>
                <TextStyled>
                  <StyledParagraph>{direction.country}</StyledParagraph>
                  <StyledHeader>{direction.city}</StyledHeader>
                </TextStyled>
              </OverlayText>
            </ImageContainer>
          </DirectionItem>
        ))}
      </DirectionGroup>

      <DirectionGroup>
        {popularDirection.map((direction) => (
          <DirectionItem key={direction.id}>
            <ImageContainer>
              <Image src={direction.img} alt={direction.country} />
              <OverlayText>
                <StyledIcon>
                  <div>
                    <LiaTemperatureHighSolid className="icon" />
                  </div>
                  <StyledTemperature>{direction.temperature}</StyledTemperature>
                </StyledIcon>
                <StyledText>
                  <StyledParagraph>{direction.country}</StyledParagraph>
                  <StyledHeader>{direction.city}</StyledHeader>
                </StyledText>
              </OverlayText>
            </ImageContainer>
          </DirectionItem>
        ))}
      </DirectionGroup>
    </DirectionContainer>
  );
};

export default Direction;
