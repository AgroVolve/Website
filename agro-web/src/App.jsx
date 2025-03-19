import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ScrollButton from "./components/scrollButton/ScrollButton";
import LoadingScreen from "./components/LoadingPage/LoadingScreen"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="app">
      {loading ? (
        <LoadingScreen /> 
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ScrollButton />
        </>
      )}
    </div>
  );
};

export default App;
