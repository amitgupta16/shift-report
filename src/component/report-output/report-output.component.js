import "../form-input/form-input.css";

const ReportOutput = ({
  id,
  controlItem,
  standard,
  checkingMethod,
  returnedData,
}) => {
  return (
    <div className="item">
      <div>{id}</div>
      <div className="item-title">
        <div>
          <strong>{controlItem}</strong>
        </div>
        <div className="item-subgroup">
          <div className="item-description">
            <label>{standard}</label>
            <label>{`( ${checkingMethod} )`}</label>
          </div>
        </div>
      </div>
      <label className="input-right-box">{returnedData[id - 1]}</label>
    </div>
  );
};

export default ReportOutput;
