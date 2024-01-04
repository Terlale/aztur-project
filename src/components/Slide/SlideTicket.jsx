import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Img1 from "./../img/chris-curry-zSUVxflnLmg-unsplash 1.jpg";
import Img2 from "./../img/alan-laiter-garza-o4x-UHUSXkE-unsplash 1.jpg";
import Img3 from "./../img/saikrishna-saketh-yellapragada-FACBPhv_mrk-unsplash 1.jpg";

const SlideTicket = () => {
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
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      <StyledSwiperSlide>
        <StyledImage src={Img1} alt="" />
        <ParagraphStyled>Lorem Ipsum</ParagraphStyled>
        <StyledHeader>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using...
        </StyledHeader>
        <StyledButton>Ətraflı</StyledButton>
      </StyledSwiperSlide>

      <StyledSwiperSlide>
        <StyledImage src={Img2} alt="" />
        <ParagraphStyled>Lorem Ipsum</ParagraphStyled>
        <StyledHeader>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using...
        </StyledHeader>
        <StyledButton>Ətraflı</StyledButton>
      </StyledSwiperSlide>

      <StyledSwiperSlide>
        <StyledImage src={Img3} alt="" />
        <ParagraphStyled>Lorem Ipsum</ParagraphStyled>
        <StyledHeader>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using...
        </StyledHeader>
        <StyledButton>Ətraflı</StyledButton>
      </StyledSwiperSlide>
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
  gap: 10px;
`;

const StyledHeader = styled.h1`
  font-size: 12px;
  font-weight: 400;
`;
const StyledButton = styled.button`
  width: 180px;
  height: 47px;
  color: #132d97;
  background-color: white;
  border: 1px solid #132d97;

  &:hover {
    color: white;
    background-color: #132d97;
  }
`;

const ParagraphStyled = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

const StyledImage = styled.img`
  width: 100%;
`;

export default SlideTicket;
