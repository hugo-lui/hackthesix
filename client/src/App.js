// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";

// Util packages
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
