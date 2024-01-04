// TourInform.js
import React from "react";
import Layout from "../../layout/Layout";
import InformHotel from "../../components/Inform/InformHotel";

const HotelInform = () => {



  return (
    <div>
      <Layout
        main={
          <div style={{padding:"60px"}}>
            <InformHotel/>
           
          </div>

        }
      />
    </div>
  );
};

export default HotelInform;
