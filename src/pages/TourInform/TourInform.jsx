// TourInform.js
import React from "react";
import Layout from "../../layout/Layout";
import InformTour from "../../components/Inform/InformTour";

const TourInform = () => {



  return (
    <div>
      <Layout
        main={
          <div style={{padding:"60px",backgroundColor:"#EEEEEE"}}>
            <InformTour/>
           
          </div>

        }
      />
    </div>
  );
};

export default TourInform;
