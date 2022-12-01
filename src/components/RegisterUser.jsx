import React, { useRef, useState } from "react";

const RegisterUser = () => {
  const firstname = useRef(null);
  const lastname = useRef(null);
  const age = useRef(null);
  const job = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [formErrors, setFormErrors] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formBody = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      age: age.current.value,
      job: job.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await fetch("http://localhost:200/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(formBody),
      });

      const data = await res.json();
      const newUser = data.newUser;
      const hasError = data.hasError;
      const validationErrors = data.validationErrors;

      if (hasError) {
        console.log(validationErrors);
        setFormErrors([...validationErrors]);
      } else {
        console.log("Created User");
        console.log(newUser);

        //* remove input values and clear formErrors array when registration is successful
        firstname.current.value = "";
        lastname.current.value = "";
        age.current.value = "";
        job.current.value = "";
        email.current.value = "";
        password.current.value = "";
        setFormErrors();
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(formErrors);
  return (
    <form
      onSubmit={onSubmit}
      className="col-md-7 m-auto mt-5 shadow-lg p-5 bg-white rounded"
    >
      <div className="row">
        {/* <!---------fistname----------> */}
        <div className="col">
          <FormInput
            label_name="First Name"
            type="text"
            id="firstname"
            classname="form-control"
            reference={firstname}
            formErrors={formErrors}
            state="firstname"
          />
        </div>

        {/* <!---------lastname----------> */}
        <div className="col">
          <FormInput
            label_name="Last Name"
            type="text"
            id="lastname"
            classname="form-control"
            reference={lastname}
            formErrors={formErrors}
            state="lastname"
          />
        </div>
      </div>
      {/* <!---------Age----------> */}
      <div className="row">
        <div className="col">
          <FormInput
            label_name="Age"
            type="number"
            id="age"
            classname="form-control"
            reference={age}
            formErrors={formErrors}
            state="age"
          />
        </div>

        {/* <!---------Job----------> */}
        <div className="col">
          <select
            className="form-select"
            aria-label="Default select example"
            ref={job}
            id="job"
          >
            <option></option>
            <option value="Freelancer">Freelancer</option>
            <option value="Developer">Developer</option>
            <option value="Virtual Assistant">Virtual Assistant</option>
            <option value="Model">Model</option>
          </select>
          <label htmlFor="job">Select Job</label>
          {formErrors && (
            <DisplayFormErrors formErrors={formErrors} state={"job"} />
          )}
        </div>
      </div>

      <FormInput
        label_name="Email"
        type="email"
        id="email"
        classname="form-control"
        reference={email}
        formErrors={formErrors}
        state="email"
      />

      {/* <!---------Password----------> */}
      <FormInput
        label_name="Password"
        type="password"
        id="password"
        classname="form-control"
        reference={password}
        formErrors={formErrors}
        state="email"
      />

      <button type="submit" className="btn btn-primary btn-block">
        Sign up
      </button>
    </form>
  );
};

const FormInput = ({
  label_name,
  type,
  id,
  classname,
  reference,
  formErrors,
  state,
}) => {
  return (
    <div className="form-outline mb-3">
      <input type={type} id={id} className={classname} ref={reference} />
      <label
        className="form-label mb-0"
        htmlFor={id}
        style={{ fontSize: ".9rem" }}
      >
        {label_name}
      </label>
      {formErrors && (
        <DisplayFormErrors formErrors={formErrors} state={state} />
      )}
    </div>
  );
};

const DisplayFormErrors = ({ formErrors, state }) => {
  let message;
  formErrors.forEach((i) => {
    if (i.key === state) {
      message = i.errorMessage;
    }
  });

  return (
    <p className="text-danger" style={{ fontSize: ".85rem" }}>
      {message}
    </p>
  );
};

export default RegisterUser;
