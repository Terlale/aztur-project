import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import OfferData from "../../data/OfferData";

const SlideOffer = () => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    setOffer(OfferData);
  }, []);

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
      {offer.map((item) => (
        <StyledSwiperSlide key={item.id}>
          <div>
            <div>
              <img src={item.img} alt="" style={{ width: "100%" }} />
            </div>
            <StyledInform>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </StyledInform>
          </div>
          {item.isSpecial && <StyledButton>Xüsusi təklif</StyledButton>}
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #c9c9c945;
  border-radius: 10px;
  margin: 60px 0px;
`;

const StyledInform = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const StyledButton = styled.button`
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
  width: 210px;
  height: 50px;
  border-radius: 5px;
  background-color: #09259a;
  color: white;
  border: none;
`;


export default SlideOffer;
