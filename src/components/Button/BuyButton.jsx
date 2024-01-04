import React from "react";
import styled from "styled-components";

const BuyButton = () => {
  const StyledButton = styled.button`
    width: 150px;
    height: 46px;
    border-radius: 5px;
    color: white;
    background-color: #1b1464;
  `;
  return (
    <div>
      <StyledButton>Almaq</StyledButton>
    </div>
  );
};

export default BuyButton;
