import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TourData from "../../data/TourData";
import ButtonData from "../../data/ButtonData";
import { useParams } from "react-router-dom";
import SlideTourGallery from "../Slide/SlideTourGallery";
import TourGalleryData from "../../data/TourGalleryData";

const InformTour = () => {
  const { id } = useParams();
  const tour = TourData.find((item) => item.id === parseInt(id));
  const [hoveredButton, setHoveredButton] = useState(null);
  const [tourButton, setTourButton] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if(id){
      const filteredImages = TourGalleryData.filter((data) => data.tour_id === parseInt(id));
      setGalleryImages([...filteredImages]);
    }
  },[id])

  useEffect(() => {
    setTourButton(ButtonData);
  }, []);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const handleButtonHover = (index) => {
    setHoveredButton(index);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <StyledInformTour>
      <TourWrapper>
        <TourImage>
          <img src={tour.img} alt="" />
        </TourImage>
        <TourDescription>
          <div>
            <h1>{tour.title}</h1>
            <StyledParagraph>{tour.longText}</StyledParagraph>
          </div>
          <div>
            <StyledPrice>{tour.price}</StyledPrice>
            <button>Turu al</button>
          </div>
        </TourDescription>
      </TourWrapper>
      <StyledGallery>
      <div><SlideTourGallery galleryImages={galleryImages}/></div>
      </StyledGallery>
      <StyledButtonContainer>
        {tourButton.map((item, index) => (
          <div key={index}>
            <StyledButton
              onClick={() => handleButtonClick(index)}
              onMouseEnter={() => handleButtonHover(index)}
              onMouseLeave={handleButtonLeave}
              className={hoveredButton === index || selectedButton === index ? 'active' : ''}
            >
              {item.buttonName}
            </StyledButton>
          </div>

        ))}
        
      </StyledButtonContainer >
      <div>
        {selectedButton !== null && (
          <div>
            <StyledText>{tourButton[selectedButton].buttonText}</StyledText>
          </div>
        )}
      </div>
    </StyledInformTour>
  );
};

export default InformTour;

const StyledInformTour = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
`;

const TourWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TourImage = styled.div`
  width: 50%;

  img {
    width: 85%;
  }
`;

const TourDescription = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  width: 50%;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  div {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    flex-direction: column;

    button {
      width: 210px;
      height: 52px;
      border-radius: 5px;
      background-color: #09259a;
      color: white;
      border: none;
    }
  }
`;

const StyledGallery = styled.div`
  // Add styles for gallery
`;
const StyledParagraph = styled.p`
  font-size: 16px;
  font-weight: 00;
`;

const StyledPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #09259a;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled.button`
  width: 210px;
  height: 52px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover,
  &.active {
    background-color: #09259a;
    color: white;
  }
`;

const StyledText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #555;
  margin-top: 10px;
`;
