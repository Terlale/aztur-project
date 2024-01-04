import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Connect, Home, HotelInform, Hotels, Services, Tickets, TourInform, Tours } from "../pages";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/tickets" element={<Tickets/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/tourinform/:id" element={<TourInform/>} />
        <Route path="/hotelinform/:id" element={<HotelInform/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

