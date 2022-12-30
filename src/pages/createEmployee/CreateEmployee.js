import React from "react";
import Form from "../../component/form/Form";
import Header from "../../component/header/Header";

const CreateEmployee = React.memo(() => {
  return (
    <div className="header">
      <Header />
      <Form />
    </div>
  );
});

export default CreateEmployee;
