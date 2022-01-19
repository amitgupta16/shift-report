const ReportPicker = (props) => {
  const { handleChange } = props;

  return (
    <div>
      <label>Date:</label>
      <input type="date" name="date" onChange={handleChange}></input>
      <span> </span>
      <label>Shift:</label>
      <input
        type="radio"
        id="a"
        name="shift"
        onChange={handleChange}
        value="A"
      />
      <label htmlFor="a">A</label>
      <input
        type="radio"
        id="b"
        name="shift"
        onChange={handleChange}
        value="B"
      />
      <label htmlFor="b">B</label>
      <input
        type="radio"
        id="c"
        name="shift"
        onChange={handleChange}
        value="C"
      />
      <label htmlFor="c">C</label>
      <br />
      <br />

      <label htmlFor="line">Line:</label>
      <select name="line" id="line" onChange={handleChange}>
        <option value="core_assy">Core Assembly</option>
        <option value="furnace_3">Furnace 3</option>
        <option value="hlt">Helium Leak Test</option>
      </select>
    </div>
  );
};

export default ReportPicker;
