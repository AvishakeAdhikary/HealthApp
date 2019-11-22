import React from "react";
import "./health.css";

const Health = props => {
  return (
    <div>
      <h1>Health App</h1>
      <div
        class="flip-card"
        id="card"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "10px 10px"
        }}
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://i1.sndcdn.com/avatars-000145481005-8x4evx-t500x500.jpg"
              alt="Avatar"
              width="200px"
            />
          </div>
          <div class="flip-card-back">
            <div>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-success">
        Get Started
      </button>
    </div>
  );
};

export default Health;
