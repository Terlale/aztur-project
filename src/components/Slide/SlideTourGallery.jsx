import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SlideTourGallery = ({ galleryImages }) => {
  console.log(galleryImages)
  return (
  
      <StyledSwiper
      style={{
        "--swiper-pagination-color": "#a4b4c7",
        alignItems: "center",
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
          slidesPerView: 7,
          spaceBetween: 45,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
       {galleryImages && galleryImages.length > 0 && galleryImages.map((item, index) => (
        <StyledSwiperSlide key={index}>
          <StyledImage
            src={item.image}
            alt={`Tour ${item.tour_id} - Image ${index + 1}`}
          />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>

  );
};

const StyledSwiper = styled(Swiper)``;

const StyledSwiperSlide = styled(SwiperSlide)``;

const StyledImage = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
`;

export default SlideTourGallery;
