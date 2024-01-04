import React from "react";
import Layout from "../../layout/Layout";
import SlideCart from "../../components/Slide/SlideCart";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Commercial from "../../components/Commercial/Commercial";
import Direction from "../../components/Direction/Direction";
import SlideOffer from "../../components/Slide/SlideOffer";
import Back from "../../components/img/daniel-frank-jqvd_DbXoDI-unsplash 1.jpg";
import SlideHotel from "../../components/Slide/SlideHotel";

const Home = () => {
  const head = "POPULAR TURLAR";
  const head1 = "ISTİQAMƏTİNİ SEÇ";
  const head2 = "XÜSUSİ TƏKLİFLƏR";
  const head3 = "HOTELLƏR"
  return (
    <div>
      <Layout
        main={
          <div>
            <div style={{ padding: "20px 60px" }}>
              <div>
                <Header text={head} />
                <SlideCart />
              </div>
              <Main />
            </div>
            <Commercial />
            <div  style={{ padding: "20px 60px" }}>
            <Header text={head1}/>
            </div>
            <Direction/>
            <div style={{ padding: "20px 60px" }}>
                <Header text={head2} />
                <SlideOffer />
            </div>
            <div>
                 <img src={Back} alt="" style={{maxWidth:"100%"}}/>
            </div>
            <div style={{ padding: "20px 60px" }}>
                <Header text={head3} />
                <SlideHotel />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Home;
