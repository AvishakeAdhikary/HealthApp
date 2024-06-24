import React, { useState } from 'react';

const Input = () => {
  const [weight, setWeight] = useState(150);
  const [height, setHeight] = useState(68);
  const [showPopup, setShowPopup] = useState(false);

  const handleWeightAndHeight = (event) => {
    const { id, value } = event.target;
    if (id === 'weight') {
      setWeight(value);
    } else if (id === 'height') {
      setHeight(value);
    }
  };

  const handleClick = () => {
    const parsedWeight = parseInt(weight, 0);
    const parsedHeight = parseInt(height, 0);
    const gender = document.getElementById("gender").value;
    const smoke = document.getElementById("smoke").value;
    const lazy = document.getElementById("lazy").value;
    const pain = document.getElementById("pain").value;
    const parsedSystolicBP = parseInt(document.getElementById("sbp").value, 0);

    if (
      parsedWeight &&
      parsedHeight &&
      gender &&
      smoke &&
      lazy &&
      pain &&
      parsedSystolicBP
    ) {
      const bmi = parsedWeight / ((parsedHeight / 100) * (parsedHeight / 100));

      if (bmi <= 24.9) {
        if (
          gender === "male" ||
          gender === "female" ||
          (gender !== "male" && gender !== "female")
        ) {
          if (
            smoke === "yes" ||
            lazy === "yes" ||
            pain === "yes" ||
            parsedSystolicBP > 130
          ) {
            setShowPopup(true);
          } else {
            alert("You do not have diabetes. You're good to go. Stay fit.");
          }
        } else {
          console.log("Unexpected Error In Setting Gender");
        }
      } else if (bmi > 24.9) {
        if (
          gender === "male" ||
          gender === "female" ||
          (gender !== "male" && gender !== "female")
        ) {
          if (
            smoke === "yes" ||
            lazy === "yes" ||
            pain === "yes" ||
            parsedSystolicBP > 130
          ) {
            setShowPopup(true);
          } else if (parsedSystolicBP <= 130) {
            alert(
              "You have a moderate chance of diabetes. We recommend consulting a doctor for further evaluation."
            );
          }
        } else {
          console.log("Unexpected Error In Setting Gender");
        }
      } else {
        console.log("Unexpected Error In Setting BMI");
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setWeight(150);
    setHeight(68);
    // Reset other form elements as needed
  };

  return (
    <div className="card p-3">
      <input id="phone" type="text" className="form-control mb-2" placeholder="Phone Number" />
      <p id="weight-value">Weight: {weight}</p>
      <input
        id="weight"
        type="range"
        min="90"
        max="250"
        step="1"
        value={weight}
        onChange={handleWeightAndHeight}
        className="form-control mb-2"
      />
      <p id="height-value">Height: {height}</p>
      <input
        id="height"
        type="range"
        min="58"
        max="80"
        step="1"
        value={height}
        onChange={handleWeightAndHeight}
        className="form-control mb-2"
      />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" className="form-control mb-2">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="smoke">Do you smoke?</label>
      <select id="smoke" className="form-control mb-2">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label htmlFor="lazy">How lazy are you?</label>
      <select id="lazy" className="form-control mb-2">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label htmlFor="pain">Pain status:</label>
      <select id="pain" className="form-control mb-2">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input id="sbp" type="number" placeholder="Systolic Blood Pressure" className="form-control mb-2" />
      <button onClick={handleClick} className="btn btn-primary btn-block">Submit</button>

      {showPopup && (
        <div className="popup popup-container">
          <div className="popup-content">
            <h2>Diabetes Risk Alert!</h2>
            <p>
              You might have a higher risk of diabetes. Please consult a doctor
              for further evaluation.
            </p>
            <button onClick={closePopup} className="btn btn-secondary">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
