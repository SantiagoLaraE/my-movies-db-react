import React from "react";
import './LoadingSpinner.scss'

const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner">
      <div className="LoadingSpinner__spinner"></div>
      <p className="LoadingSpinner__text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
