import React, { useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 1500);

    return () => clearTimeout(timer); 
  }, [onFinish]);

  return (
    <div className="loading-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
