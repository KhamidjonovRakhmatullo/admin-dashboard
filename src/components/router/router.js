import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "../home/home";
import NavbarComponent from "../navbar/navbar";
import MotorComponent from "../motor/motor";
import CaravanComponent from "../caravan/caravan";
import TuningComponent from "../tuning/tuning";
import UsedcarComponent from "../usedcar/usedcar";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="motor" element={<MotorComponent />} />
        <Route path="caravan" element={<CaravanComponent />} />
        <Route path="tuning" element={<TuningComponent />} />
        <Route path="usedcar" element={<UsedcarComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
