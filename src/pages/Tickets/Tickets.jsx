import React from 'react'
import Layout from '../../layout/Layout'
import Ticket from '../../components/Ticket/Ticket'
import SlideTicket from '../../components/Slide/SlideTicket'

const Tickets = () => {
  return (
    <div><Layout main= {

      <div>
        <Ticket/>
       <div style={{padding:"60px"}}> <SlideTicket/></div>
      </div>
    }/></div>
  )
}

export default Tickets