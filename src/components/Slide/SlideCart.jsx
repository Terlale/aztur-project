import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import TourData from "../../data/TourData";
import { useNavigate } from "react-router-dom";

const SlideCart = () => {
  const [popularTours, setPopularTours] = useState([]);
  const navigate = useNavigate()

  const goTour = () =>{
    navigate("/tours")
  }
  useEffect(() => {
    const filteredTours = TourData.filter((data) => data.isPopular);
    setPopularTours([...filteredTours]);
  }, [TourData]);

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "transparent",
      }}
      slidesPerView={3}
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
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {popularTours.map((item) => (
        <StyledSwiperSlide key={item.id}>
          <StyledImage src={item.img} alt={item.name} />
          <StyledHeader onClick={goTour}>{item.title}</StyledHeader>
          <StyledPoint>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </StyledPoint>
          <StyledTitle>{item.shortText}</StyledTitle>
          <StyledButton>
            <StyledIcon>
              <div style={{fontSize: "20px"}}><MdOutlineCalendarMonth/></div>
              <StyledParagraph>{item.date} gün</StyledParagraph>
            </StyledIcon>
            <StyledIcon>
              <div style={{fontSize: "15px"}}><IoPersonOutline /></div>
              <StyledParagraph>{item.follow}</StyledParagraph>
            </StyledIcon>
          </StyledButton>
        </StyledSwiperSlide>
      ))}
    </Swiper>
  );
};

const StyledSwiperSlide = styled(SwiperSlide)`
display: flex;
flex-direction: column;
margin-right: 40px;
background: #F8F7F7;
`;

const StyledImage = styled.img``;

const StyledTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  padding: 0px 8px 8px 8px;
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  padding: 0px 8px;
`;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0px 8px;
`;
const StyledButton = styled.button`
  width: 100%;
  display: flex;
  color: white;
  background: #09259a;
  height: 54px;
  align-items: center;
  border: none ;
  border-radius: 0px 0px 5px 5px;
  gap: 10px;
  padding: 8px;
`;

const StyledHeader = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  padding: 8px 8px 0px 8px;
`;
const StyledPoint = styled.div`
  color: #ffc107;
  padding: 0px 8px;
`;

export default SlideCart;
