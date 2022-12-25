import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const CreateEmployee = lazy(() =>
  import("./pages/createEmployee/CreateEmployee")
);
const Employee = lazy(() => import("./pages/employee/Employee"));
const Error = lazy(() => import("./pages/error/Error"));
const Loading = lazy(() => import("./component/loading/Loading"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="employees" element={<Employee />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
