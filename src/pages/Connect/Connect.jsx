import React from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import {
  FaLocationDot,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import StyledConnection from "../../components/StyledConnection/StyledConnection";

// Styled components
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 60px;

  @media (max-width: 686px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  border: 1px solid grey;
  margin: 10px;
  padding: 20px;

  p {
    font-size: 14px;
  }

  @media (max-width: 686px) {
    width :100%;
  }
`;

const RightSection = styled.div`
  width: 50%;
  background-color: #0a249ab4;
  color: white;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 30px;
  padding: 30px;
  margin: 10px;

  @media (max-width: 686px) {
    width :100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: white;
  font-size: 22px;
`;

const Connect = () => {
  return (
    <div>
      <Layout
        main={
          <Wrapper>
            <LeftSection>
              <p>
                Bütün sual və müraciətlərinizi rahatlıqla bizə ünvanlaya
                bilərsiniz. Ən qısa zamanda və böyük məmnuniyyətlə
                cavablandıracağıq.
              </p>
              <StyledConnection />
            </LeftSection>
            <RightSection>
              <ContactInfo>
                <BsFillTelephoneFill style={{ fontSize: "24px" }} />
                <div>
                  <p>+994 55 6666600</p>
                  <p>+994 55 4466606</p>
                  <p>+994 55 4466606</p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <IoIosMail style={{ fontSize: "24px" }} />
                <p>info@aztur.com</p>
              </ContactInfo>
              <ContactInfo>
                <FaLocationDot style={{ fontSize: "24px" }} />
                <p>Baku, Azerbaijan</p>
              </ContactInfo>
              <SocialIcons>
                <FaFacebookF />
                <FaLinkedinIn />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </SocialIcons>
            </RightSection>
          </Wrapper>
        }
      />
    </div>
  );
};

export default Connect;
