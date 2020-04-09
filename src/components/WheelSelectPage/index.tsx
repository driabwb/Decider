import React from 'react';
// import './WheelSelectPage.css';

function WheelSelectPage() {
  return (
    <div className="wheel-select-page">
      <div className="search-wheel-section">
        <input type="text" placeholder="Search" />
        <button name="new-list">New Wheel</button>
      </div>
      <div className="wheel-list">
        <p>Wheel List</p>
      </div>
    </div>
  );
}

export default WheelSelectPage;
