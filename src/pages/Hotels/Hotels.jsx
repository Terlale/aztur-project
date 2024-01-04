import React from 'react'
import Layout from '../../layout/Layout'
import HotelCart from '../../components/HotelCart/HotelCart'

const Hotels = () => {
  return (
    <div><Layout main={
      <div style={{padding:"60px"}}><HotelCart/></div>
    }/></div>
  )
}

export default Hotels