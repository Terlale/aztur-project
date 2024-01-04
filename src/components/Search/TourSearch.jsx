import React from "react";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TourSearch = () => (
  <StyledTourSearchContainer>
    <StyledHeader>
      <StyledLine />
      <StyledTitle>Tur Kateqoriyaları</StyledTitle>
    </StyledHeader>
    <Formik
      initialValues={{
        checked: [],
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <StyledForm
          
        >
          <label style={{ display: "none" }}>{`${values}`}</label>

          <StyledCheckboxContainer>
            <StyledCheckboxGroup>
              <StyledCheckboxColumn>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Populyar" />
                  Populyar
                </StyledLabel>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Kəşfiyyat" />
                  Kəşfiyyat
                </StyledLabel>
              </StyledCheckboxColumn>
              <StyledCheckboxColumn>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Daxili Turlar" />
                  Daxili Turlar
                </StyledLabel>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Xarici Turlar" />
                  Xarici Turlar
                </StyledLabel>
              </StyledCheckboxColumn>
              <StyledCheckboxColumn>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Balayı turu" />
                  Balayı turu
                </StyledLabel>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Ov Turu" />
                  Ov Turu
                </StyledLabel>
              </StyledCheckboxColumn>
              <StyledCheckboxColumn>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Bayram" />
                  Bayram
                </StyledLabel>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Tətil Turu" />
                  Tətil Turu
                </StyledLabel>
              </StyledCheckboxColumn>
              <StyledCheckboxColumn>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Yeni" />
                  Yeni
                </StyledLabel>
                <StyledLabel>
                  <Field type="checkbox" name="checked" value="Tur" />
                  Tur
                </StyledLabel>
              </StyledCheckboxColumn>
            </StyledCheckboxGroup>
          </StyledCheckboxContainer>

          <StyledButton type="submit">Axtar</StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledTourSearchContainer>
);
const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1040px) {
    flex-direction: column;
    align-items:flex-start;
    gap:10px;
  }
`;

const StyledTourSearchContainer = styled.div`
  background-color: #f4f4f4;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledHeader = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLine = styled.hr`
  border: 2px solid #1b1464;
  border-radius: 5px;
`;

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 1040px) {
    flex-direction: column;
    gap:5px;
  }
`;

const StyledCheckboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const StyledButton = styled.button`
  width: 210px;
  height: 54px;
  background-color: #1b1464;
  color: white;
  border: none;
  @media (max-width: 280px) {
    max-width:115px;
  }
`;

export default TourSearch;
