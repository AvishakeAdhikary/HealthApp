import React from 'react';
import './App.css';
import Udata from './Udata';
import Input from './Input';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="Header text-center mt-5">HEALTH APP</h1>
      <div className="row justify-content-around mt-5">
        <div className="col-lg-6">
          <Udata />
        </div>
        <div className="col-lg-6">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
