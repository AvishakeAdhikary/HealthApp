import React, { useState } from 'react';
import ReactDatePicker from 'react-date-picker';

const Udata = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setName('');
    setEmail('');
    setHeartRate('');
    setBirthday(new Date());
  };

  return (
    <div className="card p-3">
      {loggedIn ? (
        <>
          <p className="text-center">Welcome, {name}!</p>
          <button
            type="button"
            className="btn btn-outline-danger btn-block"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <label>Name:</label>
          <input
            className="form-control mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Heart Rate:</label>
          <input
            className="form-control mb-2"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
          <label>Birthday:</label>
          <ReactDatePicker
            className="form-control mb-2"
            onChange={setBirthday}
            value={birthday}
          />
          <button
            type="button"
            className="btn btn-outline-success btn-block"
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
