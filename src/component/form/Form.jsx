import React from "react";
import states from "./States";
import Select from "react-select";
import departments from "./Department";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/reducer";
import { useForm } from "react-hook-form";
import { Modal, UseModal } from "modal-react-npm";
import { useState } from "react";
 
const Form = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [state, setState] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [zipCode, setZipeCode] = useState(null);
  const [department, setDepartment] = useState(null);

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

 
  const onSubmit = () => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="select-left">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", {
                  required: true,
                  minLength: {
                    value: 4,
                  },
                })}
                type="text"
                placeholder="First Name"
                id="name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="errors">This is required, Min length is 4</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {
                  required: true,
                  minLength: {
                    value: 4,
                  },
                })}
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="errors">This is required, Min length is 4</p>
              )}
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
                {...register("street", { required: true })}
                type="text"
                name="street"
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street"
              />
              {errors.street && <p className="errors">This is Required </p>}
            </div>
          </div>
          <div className="select-rigth">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                {...register("city", { required: true })}
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Street"
              />
              {errors.city && <p className="errors">This is Required</p>}
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
                placeholder="Zip Code"
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
            {isSubmitSuccessful && (
              <Modal
                isShowing={isShowing}
                hide={toggle}
                title="Employee Created !!"
                
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
