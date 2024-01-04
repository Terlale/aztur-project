import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HotelData from "../../data/HotelData";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  position: relative;
  width: 30%;
  margin-bottom: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 48%; /* Adjust the width for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust the width for even smaller screens */
  }
`;

const StyledText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size:18px;
  font-weight:600;
  color :white;
  padding: 15px;
`;

const StyledIcon = styled.div`
  color: #FCC00E;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const HotelCart = () => {
  const [hotel, setHotel] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    setHotel(HotelData);
  }, []);

const goHotelInform = () =>{
  navigate("/hotelinform/:id")
}
  return (
    <Container >
      {hotel.map((item, index) => (
        <Card key={index}>
          <div>
            <StyledImg src={item.img} alt=""  onClick={goHotelInform}/>
          </div>
          <StyledText>
            <p>{item.price}/gece</p>
            <p>{item.title}</p>
            <StyledIcon>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </StyledIcon>
            <p>{item.name}</p>
          </StyledText>
        </Card>
      ))}
    </Container>
  );
};

export default HotelCart;
