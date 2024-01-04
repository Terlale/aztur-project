import React from "react";
import Layout from "../../layout/Layout";
import ServiceMain from "../../components/ServiceMain/ServiceMain";

const Services = () => {
  return (
    <div>
      <Layout
        main={
          <div>
            <ServiceMain/>
          </div>
        }
      />
    </div>
  );
};

export default Services;
