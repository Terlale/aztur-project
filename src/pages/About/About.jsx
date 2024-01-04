import React from "react";
import Layout from "../../layout/Layout";
import CommercialInform from "../../components/Commercial/CommercialInform";
import Main from "../../components/Main/Main";
import Back from "../../components/img/daniel-frank-jqvd_DbXoDI-unsplash 1.jpg";
import Logos from "../../components/Logos/Logos";

const About = () => {
  return (
    <div>
      <Layout
        main={
          <div>
            <div style={{ padding: "60px 120px" }}>
              <p>
                Aztur Travel “2014-cü ildən bəri turizm istiqamətləri üzrə
                müştərilərə xidmət göstərir, Mənzil-qərargahı Monrealda (Kanada)
                yerləşən Beynəlxalq Hava Nəqliyyatı Assosiasiyasının (IATA)
                akkreditasiyasından keçmiş turizm şirkətidir”.
              </p>
              <br />
              <p>
                Müştərilərinin istəklərinə uyğun olaraq şirkət aşağıdakı
                xidmətləri təklif edir
              </p>

              <ul style={{ marginLeft: "30px" }}>
                <li>Işgüzar səfərlərin idarə edilməsi;</li>
                <li>
                  Viza xidmətləri (viza dəstəyi, elektron vizaların verilməsi);
                </li>
                <li>İstənlən istiqamətlərə aviabiletlərin satışı;</li>
                <li>Turların təşkil edilməsi;</li>
                <li>Dünyanıın müxtəlif şəhərlərində otel rezervasiyası;</li>
                <li>Unikal tur və ekskursiyalar.</li>
              </ul>
              <br />
              <p>Konsyerj xidmətləri:</p>
              <ul style={{ marginLeft: "30px", listStyle: "auto" }}>
                <li>Kruizlər;</li>
                <li>Səyahət sığortası, icbari sığorta;</li>
                <li>Qonaqların qarşılanması və VİP xidmət;</li>
                <li>
                  Yerli və xarici sanatoriyalara və sağlamlıq mərkəzlərinə
                  müalicə turları.
                </li>
              </ul>
            </div>
            <CommercialInform />
            <div style={{ padding: "20px 60px" }}>
              <Main />
            </div>
            <div>
              <img src={Back} alt="" style={{ maxWidth: "100%" }} />
            </div>
          
              <Logos/>
           
          </div>
        }
      />
    </div>
  );
};

export default About;
