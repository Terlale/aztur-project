import React from "react";

const Header = ({ text }) => {
  return (
    <div>
      <h1 style={{ fontWeight: "700", fontSize: "24px",lineHeight:"36px", }}>{text}</h1>
      <hr
        style={{
          width: "96px",
          border: "2px solid rgb(9, 37, 154)",
          borderRadius: "10px",
          margin: "5px 0px",
        }}
      />
      <p style={{ fontWeight: "400", fontSize: "16px",lineHeight:"36px", }}>Lorem ipsum dolar sit amet.</p>
    </div>
  );
};

export default Header;
