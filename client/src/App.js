// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Purchase from "./pages/Purchase";
// Components
import Navbar from "./components/Navbar";

// Util packages
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </>
  );
}

export default App;
