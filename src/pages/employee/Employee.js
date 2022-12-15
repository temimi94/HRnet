import React from "react";
import { Link } from "react-router-dom";
import "./employee.css";
import TableEmployees from "../../component/table-employees/TableEmployees";

const Employee = () => {
  return (
    <section>
      <div>
        <div id="employee-div" className="container">
          <h3>Current Employees</h3>
        </div>
      </div>
      <TableEmployees />
      <div className="path-home">
        <Link className="path" to="/">
          Home
        </Link>
      </div>
    </section>
  );
};

export default Employee;
