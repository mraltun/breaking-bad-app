import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeathGrid from "./components/DeathGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Deaths from "./pages/Deaths";
import Episodes from "./pages/Episodes";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='characters' element={<Characters />} />
          <Route path='episodes' element={<Episodes />} />
          <Route path='quotes' element={<Quotes />} />
          <Route path='deaths' element={<Deaths />} />
          <Route path='deaths/:deathId' element={<DeathGrid />} />
          <Route path='about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
