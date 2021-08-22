import React from "react";
import { useHistory } from "react-router";

const DataForm = ({ setFirstName, setZipCode, firstName, zipCode }) => {
  const history = useHistory();

  const handleName = (e) => {
    setFirstName(e.target.value);
    localStorage.setItem("nameValue", e.target.value);
  };

  const handleChange = (e) => {
    setZipCode(e.target.value);
    localStorage.setItem("zipValue", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/motivators");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={handleName}
        />
        <input
          type="text"
          value={zipCode}
          maxLength="5"
          placeholder="only 5 digits"
          pattern="^\u[0-9]{2}$"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default DataForm;
