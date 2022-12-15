import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";


import CreateEmployee from "./pages/createEmployee/CreateEmployee";
import Employee from "./pages/employee/Employee";
import Error from "./pages/error/Error";


function App() {
  return (
    <div>
        <BrowserRouter> 
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="employees" element={<Employee />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
