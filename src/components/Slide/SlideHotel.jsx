import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HotelData from "../../data/HotelData";

import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SlideHotel = () => {
  const [hotel, setHotel] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    setHotel(HotelData);
  }, []);

  const goHotel = () =>{
    navigate("/hotels")
  }


  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "transparent",
      }}
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
       {hotel
        .filter((item) => item.display) 
        .map((item) => (
          <StyledSwiperSlide key={item.id}>
            <div>
              <StyledImage src={item.img} alt="" onClick={goHotel} />
              <ParagraphStyled>{item.price} / gece</ParagraphStyled>
            </div>
            <div>
              <StyledHeader>{item.title}</StyledHeader>
              <StyledIcon>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </StyledIcon>
              <StyledParagraph>{item.name}</StyledParagraph>
            </div>
          </StyledSwiperSlide>
        ))}
    </Swiper>
  );
};

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  margin: 60px 0px;
`;

const StyledHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;
const StyledParagraph = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const ParagraphStyled = styled.p`
    position: absolute;
    bottom: 23%;
    color: white;
    padding: 8px;
`;
const StyledIcon = styled.div`
  color:#ffc107;
`;
const StyledImage = styled.img`
  width: 100%;
`;

export default SlideHotel;
