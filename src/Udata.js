import React from "react";

const Udata = props => {
  return (
    <div className="UserData">
      {`Name `} <output readOnly type="text" />
      <br />
      <br />
      {`Email `} <output readOnly type="text" />
      <br />
      <br />
      {`HeartRate `} <output readOnly type="text" />
      <br />
      <br />
      {`BirthDay `} <output readOnly type="text" />
      <br />
      <br />
      <button type="button" className="btn btn-outline-dark">
        Logout
      </button>
    </div>
  );
};

export default Udata;
