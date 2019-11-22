import React from "react";
import Udata from "./Udata";
import Input from "./Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="Header">HEALTH APP</h1>
        <br />
        <br />
        <div className="column">
          <Udata />
        </div>
        <br />
        <div className="column">
          <Input />
        </div>
        <br />
      </div>
    );
  }
}

export default App;
