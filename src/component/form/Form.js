import React from "react";
import states from "./States";
import Select from "react-select";
import departments from "./Department";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/reducer";
import { Modal, UseModal } from "package-modal-gaya";

const Form = (props) => {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
  const [state, setState] = React.useState(null);
  const [street, setStreet] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [startDate, setStartDate] = React.useState(new Date());
  const [zipCode, setZipeCode] = React.useState(null);
  const [department, setDepartment] = React.useState(null);

  const dispatch = useDispatch();
  const { isShowing, toggle } = UseModal();

  const values = {
    firstName: firstName,
    lastName,
    dateOfBirth,
    state,
    street,
    startDate,
    city,
    zipCode,
    department,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ ...values }));
  };

  const STATES = [
    ...new Set(
      states.map((state) => {
        return { value: state.abbreviation, label: state.name };
      })
    ),
  ];

  const DEPARTMENT = [
    ...new Set(
      departments.map((department) => {
        return { value: department.name, label: department.name };
      })
    ),
  ];

  return (
    <section>
      <h2>Create Employee</h2>
      <div className="form-employee">
        <form onSubmit={onSubmit}>
          <div className="select-left">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="name"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <DatePicker
                onChange={(value) => setDateOfBirth(value)}
                selected={dateOfBirth}
                dateFormat="dd/MMM/yyyy"
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <DatePicker
                onChange={(value) => setStartDate(value)}
                selected={startDate}
                dateFormat="dd/MMM/yyyy"
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                name="street"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div className="select-rigth">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <Select
                id="state"
                onChange={(e) => {
                  setState(e.label);
                }}
                options={STATES}
                placeholder="Select a state"
                className="select"
                isMulti={false}
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                name="zipCode"
                onChange={(e) => setZipeCode(e.target.value)}
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <Select
                id="department"
                onChange={(e) => {
                  setDepartment(e.label);
                }}
                options={DEPARTMENT}
                placeholder=" department"
                className="select"
                isMulti={false}
                required={true}
              />
            </div>
            <button className="save-modal" onClick={toggle}>
              Save
            </button>
            <Modal
              isShowing={isShowing}
              hide={toggle}
              title="Employee Created !!"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
