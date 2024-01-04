import React from "react";
import { FaHotel } from "react-icons/fa6";

const InformHotel = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap:"20px",
          padding:"10px 0px"
        }}
      >
        <div
          style={{
            backgrounColor: "#ECEBFA",
            color: "rgb(27, 20, 100)",
            background: "#ECEBFA",
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <FaHotel  style={{fontSize:"28px"}}/>
        </div>

        <h1 style={{fontSize:"20px",fontWeight:"600"}}>Hotellər</h1>
      </div>
      <div>
        <p style={{fontSize:"14px"}}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem ipsum’ will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br />
        <p style={{fontSize:"14px"}}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn’t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div>HotelGalary</div>
    </div>
  );
};

export default InformHotel;
