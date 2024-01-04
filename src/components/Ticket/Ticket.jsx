import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TicketData from "../../data/TicketData";
import BuyButton from "../Button/BuyButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 60px 30px;
  background-color: #f1f1f1;
  box-sizing:border-box;

  @media (max-width: 1200px) {
    padding: 30px;
  }
`;

const StyledTicket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 115px;
  border-radius: 5px;
  box-shadow: 3px 3px 8px 0px #00000014;
  padding: 40px;
  background-color: white;

  @media (max-width: 900px) {
    padding: 20px;
    height: 180px;
  }
  @media (max-width: 535px) {
    padding: 20px;
    height: 360px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const StyledFlightDetails = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 20px;
  }
`;

const StyledLine = styled.div`
  width: 55px;
  height: 3px;
  background-color: #183787;
  margin: 0 10px;
  border-radius: 20%;
`;
const StyledCol = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;

  @media (max-width: 900px) {
    gap: 0px;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Ticket = () => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    setTicket(TicketData);
  }, []);

  return (
    <StyledContainer>
      {ticket.map((item) => (
        <StyledTicket key={item.id}>
          <StyledCol>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
                  {item.name}
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#818181",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
            <StyledFlightDetails>
              <div>
                <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
                  {item.departureTime}
                </h1>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#818181",
                  }}
                >
                  {item.departureTitle}
                </h1>
              </div>
              <StyledLine />
              <div>
                <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
                  {item.landingTime}
                </h1>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#818181",
                  }}
                >
                  {item.landingTitle}
                </h1>
              </div>
            </StyledFlightDetails>
          </StyledCol>
          <StyledCol>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#818181",
                }}
              >
                {item.duration}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#FDA331",
                }}
              >
                Flight details
              </p>
            </div>
            <div>{item.price}</div>
            <BuyButton />
          </StyledCol>
        </StyledTicket>
      ))}
    </StyledContainer>
  );
};

export default Ticket;
