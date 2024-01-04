import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Layout = ({main}) => {
  return (
    <div>
        <div><Navbar/></div>
        <div>{main}</div>
        <div><Footer/></div>
    </div>
  )
}

export default Layout