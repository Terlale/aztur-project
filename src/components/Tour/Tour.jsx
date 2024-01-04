import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdStar } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import TourData from "../../data/TourData";
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  const goTourInform = (id) => {
    navigate(`/tourinform/${id}`);
  };

  useEffect(() => {
    setTours(TourData);
  }, []);

  return (
    <StyledTourContainer>
      {tours.map((item) => (
        <StyledTourCard key={item.id}>
          <StyledCard>
            <div style={{ width: "50%" }}>
              <img src={item.img} alt="" style={{ width: "95%", height: "100%" }} />
            </div>
            <div
              onClick={() => goTourInform(item.id)}
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h1 style={{ fontSize: "22px", fontWeight: "600" }}>
                {item.title}
              </h1>
              <StyledStars style={{ color: "#FCC00E" }}>
                <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar />
              </StyledStars>
              <p style={{ fontSize: "14px", fontWeight: "400" }}>
                {item.longText}
              </p>
              <div style={{ color: "#848484" }}>
                <span style={{ color: "#FCC00E" }}>{item.price}</span>/nəfər
              </div>
              <StyledButton >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ fontSize: "20px" }}>
                    <MdOutlineCalendarMonth />
                  </div>
                  <StyledParagraph>{item.date} gün</StyledParagraph>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ fontSize: "15px" }}>
                    <IoPersonOutline />
                  </div>
                  <StyledParagraph>{item.follow}</StyledParagraph>
                </div>
              </StyledButton>
            </div>
          </StyledCard>
        </StyledTourCard>
      ))}
    </StyledTourContainer>
  );
};

const StyledTourContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 675px) {
    flex-direction: column;
  }
`;
const StyledCard = styled.div`
width:100%;
display:flex;
@media (max-width: 786px) {
  flex-direction: column;
  align-items: center; 
}

`;

const StyledTourCard = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 35px 0px;
  @media (max-width: 675px) {
    width: 100%;
  }
`;

const StyledStars = styled.div`
  // Add styles for stars container
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  padding: 0px 8px;
`;

const StyledButton = styled.button`
  width: 96%;
  display: flex;
  color: white;
  background: #09259a;
  height: 54px;
  align-items: center;
  border: none;
  border-radius:5px;
  gap: 10px;
  padding: 8px;

  @media (max-width: 786px) {
    max-width: 250px; 
  }
`;

export default Tour;
