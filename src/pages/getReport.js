import React from "react";
import "../App.css";

import ReportPicker from "../component/report-picker/report-picker.component";
import ReportOutput from "../component/report-output/report-output.component";
import Core_Assy from "../data/core_assy";
import Furnace3 from "../data/furnace3";
import Hlt from "../data/hlt";

class GetReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      shift: "",
      line: "core_assy",
      returnedData: [],
      isFindPressed: false,
    };
  }

  HandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.HandleReset();
  };

  HandleFind = async (e) => {
    e.preventDefault();
    const id = this.state.date + "-" + this.state.shift;
    const line = this.state.line;
    const res = await fetch(
      `https://morning-sierra-85370.herokuapp.com/getReport/${id}/${line}`
    );
    const returnedReport = await res.json();
    this.setState({
      isFindPressed: true,
      returnedData: returnedReport,
    });
  };

  HandleReset = (e) => {
    // e.preventDefault();
    this.setState({
      isFindPressed: false,
      returnedData: [],
    });
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
        <h3>Find Report</h3>
        <br />
        <ReportPicker handleChange={this.HandleChange} />
        <br />
        <input
          className="submit button"
          type="button"
          onClick={this.HandleFind}
          value="Find"
        ></input>
        <span> </span>
        <input
          className="submit button"
          type="button"
          onClick={this.HandleReset}
          value="Reset"
        ></input>
        <br />
        <br />

        {this.state.isFindPressed && (
          <fieldset>
            <legend>
              Operation Check Sheet:{" "}
              <strong>{this.state.line.toLocaleUpperCase()}</strong>
            </legend>
            <label>
              Date: {this.state.date}, Shift: {this.state.shift}
            </label>{" "}
            <br />
            {this.state.returnedData.length < 2 && (
              <label style={{ color: "red" }}>Report not found !</label>
            )}
            <div>
              {Line.map((data, index) => (
                <ReportOutput
                  id={data.id}
                  controlItem={data.controlItem}
                  standard={data.standard}
                  checkingMethod={data.checkingMethod}
                  returnedData={this.state.returnedData}
                  key={index}
                ></ReportOutput>
              ))}
            </div>
          </fieldset>
        )}
      </div>
    );
  }
}

export default GetReport;
