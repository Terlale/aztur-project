import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaCalendar, FaUser } from "react-icons/fa";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px;
  }
`;

const InputContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    
  }
`;

const CustomInput = styled.input`
  width: 180px;
  height: 56px;
  padding-left: 30px;
  border: 0.2px solid #b7b7b7;
  border-radius: ${(props) => props.roundedCorners};

  @media (max-width: 768px) {
    
  }
`;

const CustomButton = styled.button`
  background-color: white;
  color: black;
  font-weight: 600;
  padding: 10px;
  border: none;
  width: 180px;
  height: 56px;
  border-radius: ${(props) => props.roundedCorners};

  @media (max-width: 768px) {
    
  }
`;

const SearchForm = () => {
  return (
    <Form>
      <InputContainer>
        <FaMapMarkerAltStyled />
        <CustomInput
          type="text"
          placeholder="Hara"
          roundedCorners="5px 0px 0px 5px"
        />
      </InputContainer>

      <InputContainer>
        <FaCalendarStyled />
        <CustomInput type="date" placeholder="05/05/2023" />
      </InputContainer>

      <InputContainer>
        <FaCalendarStyled />
        <CustomInput type="date" placeholder="05/05/2023" />
      </InputContainer>

      <InputContainer>
        <FaUserStyled />
        <CustomInput
          type="number"
          placeholder="Nefer"
          style={{ border: "0.5px solid transparent" }}
        />
      </InputContainer>

      <CustomButton roundedCorners="0px 5px 5px 0px" type="submit">
        Axtar
      </CustomButton>
    </Form>
  );
};

const FaMapMarkerAltStyled = styled(FaMapMarkerAlt)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #fda331;
`;

const FaCalendarStyled = styled(FaCalendar)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #fda331;
`;

const FaUserStyled = styled(FaUser)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #fda331;
`;

export default SearchForm;
