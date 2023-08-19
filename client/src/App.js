// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";

// Util packages
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [keyword, setKeyword] = useState("");
  const [urls, setUrls] = useState([]);

  const handleClick = async () => {
    try {
      const endpoint = `http://localhost:5000/${keyword}`;
      const response = await fetch(endpoint);
      if(response.ok) {
        const jsonResponse = await response.json();
        setUrls(jsonResponse.urls);
      }
    }     
    catch(err) {
        console.log(err);
    }
  }

  const handleChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onChange={handleChange} onClick={handleClick} urls={urls}/>} />
      </Routes>
    </>
  );
}

export default App;
