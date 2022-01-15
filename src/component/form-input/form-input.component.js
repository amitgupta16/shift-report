import "./form-input.css";

const FormInput = ({
  id,
  controlItem,
  standard,
  checkingMethod,
  handleChange,
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
      <input
        className="input-right"
        type="text"
        name={id}
        onChange={handleChange}
        required
      ></input>
    </div>
  );
};

export default FormInput;
