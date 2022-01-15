import React from "react";

import FormInput from "../component/form-input/form-input.component";
import ReportPicker from "../component/report-picker/report-picker.component";
import Core_Assy from "../data/core_assy";
import Furnace3 from "../data/furnace3";
import Hlt from "../data/hlt";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      shift: "",
      line: "core_assy",
      data: [],
    };
  }

  HandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  HandleDataChange = (e) => {
    const { name, value } = e.target;
    let newData = this.state.data;
    newData[name - 1] = value;
    this.setState({
      data: newData,
    });
  };

  HandleSubmit = (e) => {
    e.preventDefault();
    const id = this.state.date + "-" + this.state.shift;
    const report = {
      id: id,
      line: this.state.line,
      data: this.state.data,
    };
    this.addReport(report);
  };

  addReport = async (report) => {
    const res = await fetch(
      "https://morning-sierra-85370.herokuapp.com/addReport",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(report),
      }
    );
    const reply = await res.json();
    reply.id
      ? alert(`Report with ID # ${reply.id} added`)
      : alert("Data for this date/shift already exists");
  };

  render() {
    let Line = [];
    switch (this.state.line) {
      case "core_assy":
        Line = Core_Assy;
        break;
      case "furnace_3":
        Line = Furnace3;
        break;
      case "hlt":
        Line = Hlt;
        break;
      default:
        Line = [];
    }

    return (
      <div>
        <h3>Operation Check Sheet</h3>
        <br />
        <ReportPicker handleChange={this.HandleChange} />
        <br />
        <form onSubmit={this.HandleSubmit}>
          <fieldset>
            <legend>
              <strong>{this.state.line}</strong>
            </legend>

            <div>
              <label>
                Report No: {this.state.date + "-" + this.state.shift}
              </label>
              {Line.map((data) => (
                <FormInput
                  id={data.id}
                  controlItem={data.controlItem}
                  standard={data.standard}
                  checkingMethod={data.checkingMethod}
                  handleChange={this.HandleDataChange}
                ></FormInput>
              ))}
            </div>

            <input type="submit" value="Submit"></input>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Home;
