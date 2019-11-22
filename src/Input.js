import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      weight: "",
      height: "",
      gender: "",
      smoke: "",
      lazy: "",
      bmi: "",
      pain: "",
      systolicbp: "",
      submit: false
    };
  }

  returnA = () => {
    alert("You do not have diabetes. You're good to go. Stay fit.");
  };

  returnB = () => {
    alert(
      "You might have a slight chance of diabetes. We'd recommend you to consult a doctor."
    );
  };

  returnC = () => {
    alert(
      "You have a high chance of diabetes. We'd recommend you to consult a doctor immediately."
    );
  };

  returnD = () => {
    alert(
      "You must consult a doctor immediately. We'd recommend you to stay healthy and eat good food."
    );
  };

  handleWeight = event => {
    this.setState({ weight: document.getElementById("weight").value });
    document.getElementById("value").innerHTML =
      "" + document.getElementById("weight").value;
  };

  handleHeight = event => {
    this.setState({ height: document.getElementById("height").value });
  };

  setSystolic = () => {
    this.setState({ systolicbp: document.getElementById("sbp").value });
  };

  handleClick = () => {
    this.setState({ submit: true });
    var bmi = this.state.bmi;
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const gender = this.state.gender;
    const smoke = this.state.smoke;
    const lazy = this.state.lazy;
    const pain = this.state.pain;
    const systolicbp = parseInt(document.getElementById("sbp").value);
    console.log("Gender: " + gender);
    console.log("Smoke: " + smoke);
    console.log("Lazy: " + lazy);
    console.log("Pain: " + pain);
    if (height <= 58) {
      if (weight > 90 && weight <= 115) {
        bmi = "norm";
      } else if (weight > 115 && weight <= 138) {
        bmi = "over";
      } else if (weight > 138 && weight <= 186) {
        bmi = "obe";
      } else if (weight > 186) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 59) {
      if (weight > 94 && weight <= 119) {
        bmi = "norm";
      } else if (weight > 119 && weight <= 143) {
        bmi = "over";
      } else if (weight > 143 && weight <= 193) {
        bmi = "obe";
      } else if (weight > 193) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 60) {
      if (weight > 97 && weight <= 123) {
        bmi = "norm";
      } else if (weight > 123 && weight <= 148) {
        bmi = "over";
      } else if (weight > 148 && weight <= 199) {
        bmi = "obe";
      } else if (weight > 199) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 61) {
      if (weight > 100 && weight <= 127) {
        bmi = "norm";
      } else if (weight > 127 && weight <= 153) {
        bmi = "over";
      } else if (weight > 153 && weight <= 206) {
        bmi = "obe";
      } else if (weight > 206) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 62) {
      if (weight > 104 && weight <= 131) {
        bmi = "norm";
      } else if (weight > 131 && weight <= 158) {
        bmi = "over";
      } else if (weight > 158 && weight <= 213) {
        bmi = "obe";
      } else if (weight > 213) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 63) {
      if (weight > 107 && weight <= 135) {
        bmi = "norm";
      } else if (weight > 135 && weight <= 163) {
        bmi = "over";
      } else if (weight > 163 && weight <= 220) {
        bmi = "obe";
      } else if (weight > 220) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 64) {
      if (weight > 110 && weight <= 140) {
        bmi = "norm";
      } else if (weight > 140 && weight <= 169) {
        bmi = "over";
      } else if (weight > 169 && weight <= 227) {
        bmi = "obe";
      } else if (weight > 227) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 65) {
      if (weight > 114 && weight <= 150) {
        bmi = "norm";
      } else if (weight > 150 && weight <= 174) {
        bmi = "over";
      } else if (weight > 174 && weight <= 234) {
        bmi = "obe";
      } else if (weight > 234) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 66) {
      if (weight > 118 && weight <= 148) {
        bmi = "norm";
      } else if (weight > 148 && weight <= 179) {
        bmi = "over";
      } else if (weight > 179 && weight <= 241) {
        bmi = "obe";
      } else if (weight > 241) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 67) {
      if (weight > 121 && weight <= 153) {
        bmi = "norm";
      } else if (weight > 153 && weight <= 185) {
        bmi = "over";
      } else if (weight > 185 && weight <= 249) {
        bmi = "obe";
      } else if (weight > 249) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 68) {
      if (weight > 125 && weight <= 158) {
        bmi = "norm";
      } else if (weight > 158 && weight <= 190) {
        bmi = "over";
      } else if (weight > 190 && weight <= 256) {
        bmi = "obe";
      } else if (weight > 256) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 69) {
      if (weight > 128 && weight <= 162) {
        bmi = "norm";
      } else if (weight > 162 && weight <= 196) {
        bmi = "over";
      } else if (weight > 196 && weight <= 263) {
        bmi = "obe";
      } else if (weight > 263) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 70) {
      if (weight > 132 && weight <= 167) {
        bmi = "norm";
      } else if (weight > 132 && weight <= 167) {
        bmi = "over";
      } else if (weight > 202 && weight <= 271) {
        bmi = "obe";
      } else if (weight > 271) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 71) {
      if (weight > 136 && weight <= 172) {
        bmi = "norm";
      } else if (weight > 172 && weight <= 208) {
        bmi = "over";
      } else if (weight > 208 && weight <= 279) {
        bmi = "obe";
      } else if (weight > 279) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 72) {
      if (weight > 140 && weight <= 177) {
        bmi = "norm";
      } else if (weight > 177 && weight <= 213) {
        bmi = "over";
      } else if (weight > 213 && weight <= 287) {
        bmi = "obe";
      } else if (weight > 287) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 73) {
      if (weight > 144 && weight <= 182) {
        bmi = "norm";
      } else if (weight > 182 && weight <= 219) {
        bmi = "over";
      } else if (weight > 219 && weight <= 295) {
        bmi = "obe";
      } else if (weight > 295) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 74) {
      if (weight > 148 && weight <= 186) {
        bmi = "norm";
      } else if (weight > 186 && weight <= 225) {
        bmi = "over";
      } else if (weight > 225 && weight <= 303) {
        bmi = "obe";
      } else if (weight > 303) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height === 75) {
      if (weight > 152 && weight <= 192) {
        bmi = "norm";
      } else if (weight > 192 && weight <= 232) {
        bmi = "over";
      } else if (weight > 232 && weight <= 311) {
        bmi = "obe";
      } else if (weight > 311) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else if (height >= 76) {
      if (weight > 159 && weight <= 197) {
        bmi = "norm";
      } else if (weight > 197 && weight <= 238) {
        bmi = "over";
      } else if (weight > 238 && weight <= 320) {
        bmi = "obe";
      } else if (weight > 320) {
        bmi = "sobe";
      } else {
        console.log("Unexpected Error");
      }
    } else {
      console.log("Unexpected Error In Setting BMI");
    }
    if (bmi === "norm") {
      if (this.state.smoke === "yes") {
        console.log("Yes");
      } else if (this.state.smoke === "no") {
        if (this.state.pain === "yes") {
          if (systolicbp <= 140) {
            this.returnA();
          } else if (systolicbp > 140) {
            this.returnB();
          } else {
            console.log("Unexpected Error In Returning DIV");
          }
        } else {
          console.log("NO");
        }
      }
    } else if (bmi === "over") {
      alert("overweight");
    } else if (bmi === "obe") {
      alert("obeysity");
    } else if (bmi === "sobe") {
      alert("seviere obeysity");
    } else {
      console.log("Unexpected Error in return");
    }
  };

  setGenderMale = () => {
    this.setState({ gender: "male" });
  };

  setGenderFemale = () => {
    this.setState({ lazy: "female" });
  };

  setPainYes = () => {
    this.setState({ pain: "yes" });
  };

  setPainNo = () => {
    this.setState({ pain: "no" });
  };

  setSmokeYes = () => {
    this.setState({ smoke: "yes" });
  };

  setSmokeNo = () => {
    this.setState({ smoke: "no" });
  };

  setLazyLazy = () => {
    this.setState({ lazy: "lazy" });
  };

  setLazyActive = () => {
    this.setState({ lazy: "active" });
  };

  componentDidMount() {
    this.setState({
      phone: document.getElementById("phone").value,
      weight: document.getElementById("weight").value,
      height: document.getElementById("height").value,
      gender: document.getElementById("gender").value,
      smoke: document.getElementById("smoke").value,
      lazy: document.getElementById("lazy").value,
      pain: document.getElementById("pain").value,
      systolicbp: document.getElementById("sbp").value
    });
    document.getElementById("value").innerHTML =
      "" + document.getElementById("weight").value;
  }

  render() {
    return (
      <div className="Input">
        <form>
          <br />
          <br />
          {`Phone Number: `}{" "}
          <input id="phone" type="tel" onChange={this.handleChange} />
          <br />
          <br />
          <br />
          {`Height: `}{" "}
          <select id="height" className="form-control dropdown-toggle">
            <option value="58" onClick={this.handleHeight}>
              Less than or equal to 58
            </option>
            <option value="59" onClick={this.handleHeight}>
              59
            </option>
            <option value="60" onClick={this.handleHeight}>
              60
            </option>
            <option value="61" onClick={this.handleHeight}>
              61
            </option>
            <option value="62" onClick={this.handleHeight}>
              62
            </option>
            <option value="63" onClick={this.handleHeight}>
              63
            </option>
            <option value="64" onClick={this.handleHeight}>
              64
            </option>
            <option value="65" onClick={this.handleHeight}>
              65
            </option>
            <option value="66" onClick={this.handleHeight}>
              66
            </option>
            <option value="67" onClick={this.handleHeight}>
              67
            </option>
            <option value="68" onClick={this.handleHeight}>
              68
            </option>
            <option value="69" onClick={this.handleHeight}>
              69
            </option>
            <option value="70" onClick={this.handleHeight}>
              70
            </option>
            <option value="71" onClick={this.handleHeight}>
              71
            </option>
            <option value="72" onClick={this.handleHeight}>
              72
            </option>
            <option value="73" onClick={this.handleHeight}>
              73
            </option>
            <option value="74" onClick={this.handleHeight}>
              74
            </option>
            <option value="75" onClick={this.handleHeight}>
              75
            </option>
            <option value="76" onClick={this.handleHeight}>
              Greater than or equal to 76
            </option>
          </select>
          {`(In Inches)`}
          <br />
          <br />
          {`Weight: `}{" "}
          <input
            type="range"
            id="weight"
            min="91"
            max="500"
            onChange={this.handleWeight}
          />
          <div id="value" />
          {`(In pounds)`}
          <br />
          <br />
          <div>
            {`Painstatus: `}{" "}
            <input
              type="radio"
              id="pain"
              name="pain"
              value="yes"
              onChange={this.setPainYes}
            />
            {`Yes`}
            <input
              type="radio"
              id="pain"
              name="pain"
              value="no"
              onChange={this.setPainNo}
            />
            {`No`}
            <br />
            <br />
          </div>
          <div>
            {`Gender: `}{" "}
            <input
              type="radio"
              id="gender"
              name="gender"
              value="male"
              onChange={this.setGenderMale}
            />
            {`Male`}
            <input
              type="radio"
              id="pain"
              name="gender"
              value="female"
              onChange={this.setGenderFemale}
            />
            {`Female`}
            <br />
            <br />
          </div>
          <div>
            {`Do you smoke ? `}{" "}
            <input
              type="radio"
              id="smoke"
              name="smoke"
              value="yes"
              onChange={this.setSmokeYes}
            />
            {`Yes`}
            <input
              type="radio"
              id="smoke"
              name="smoke"
              value="no"
              onChange={this.setSmokeNo}
            />
            {`No`}
            <br />
            <br />
          </div>
          <div>
            {`How lazy are you ? `}{" "}
            <input
              type="radio"
              id="lazy"
              name="activity"
              value="lazy"
              onChange={this.setLazyLazy}
            />
            {`Lazy`}
            <input
              type="radio"
              id="lazy"
              name="activity"
              value="active"
              onChange={this.setLazyActive}
            />
            {`Active`}
            <br />
            <br />
          </div>
          <br />
          {`Systolic Blood Pressure: `}{" "}
          <select id="sbp" className="form-control dropdown-toggle">
            <option value="140" onClick={this.setSystolic}>
              Less than or equal to 140
            </option>
            <option value="150" onClick={this.setSystolic}>
              Greater than 140
            </option>
          </select>
          <br />
          <br />
          <br /> <br />
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-outline-dark"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
