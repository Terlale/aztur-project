import React from 'react'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";

const NavbarIcon = () => {
  return (
    <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
  )
}

export default NavbarIcon