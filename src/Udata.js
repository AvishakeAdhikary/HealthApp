import React, { useState } from "react";
import ReactDatePicker from "react-date-picker";
import "./styles.css";

const Udata = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setName("");
    setEmail("");
    setHeartRate("");
    setBirthday(new Date());
  };

  return (
    <div className="UserData card">
      {loggedIn ? (
        <>
          <p>Welcome, {name}!</p>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Heart Rate:</label>
          <input
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
          <label>Birthday:</label>
          <ReactDatePicker
            className="ReactDatePicker"
            onChange={setBirthday}
            value={birthday}
          />
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleLogin}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Udata;
