import React from 'react'
import Layout from '../../layout/Layout'
import Tour from '../../components/Tour/Tour'
import TourSearch from '../../components/Search/TourSearch'

const Tours = () => {
  return (
    <div><Layout main={
      <div style={{padding:"60px"}}>
        <TourSearch/>
        <Tour/>
      </div>
    }/></div>
  )
}

export default Tours