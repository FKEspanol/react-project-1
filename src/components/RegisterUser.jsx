import React, { useRef, useState } from "react";

import DisplayFormErrors from "./sub/DisplayErrorMessage";

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
      className="col-md-7 m-auto mt-5 shadow-lg p-5 mb-5 bg-white rounded"
    >
      <div className="row mb-5">
        {/* <!---------fistname----------> */}
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="firstname"
              className="form-control"
              ref={firstname}
            />
            <label className="form-label" htmlFor="firstname">
              First name
            </label>
            {formErrors && (
              <DisplayFormErrors formErrors={formErrors} state={"firstname"} />
            )}
          </div>
        </div>

        {/* <!---------lastname----------> */}
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="lastname"
              className="form-control"
              ref={lastname}
            />
            <label className="form-label" htmlFor="lastname">
              Last name
            </label>
            {formErrors && (
              <DisplayFormErrors formErrors={formErrors} state={"lastname"} />
            )}
          </div>
        </div>
      </div>
      {/* <!---------Age----------> */}
      <div className="row mb-5">
        <div className="col">
          <div className="form-outline">
            <input
              type="number"
              id="typeNumber"
              className="form-control"
              ref={age}
            />
            <label className="form-label" htmlFor="typeNumber">
              Enter Your Age
            </label>
            {formErrors && (
              <DisplayFormErrors formErrors={formErrors} state={"age"} />
            )}
          </div>
        </div>

        {/* <!---------Job----------> */}
        <div className="col">
          <select
            className="form-select"
            defaultValue={null}
            aria-label="Default select example"
            ref={job}
          >
            <option value="Developer">Developer</option>
            <option value="Virtual Assistant">Virtual Assistant</option>
            <option value="Model">Model</option>
          </select>
          {formErrors && (
            <DisplayFormErrors formErrors={formErrors} state={"job"} />
          )}
        </div>
      </div>

      {/* <!---------Email----------> */}
      <div className="form-outline mb-5">
        <input type="email" id="email" className="form-control" ref={email} />
        <label className="form-label" htmlFor="email">
          Email address
        </label>
        {formErrors && (
          <DisplayFormErrors formErrors={formErrors} state={"email"} />
        )}
      </div>

      {/* <!---------Password----------> */}
      <div className="form-outline mb-5">
        <input
          type="password"
          id="password"
          className="form-control"
          ref={password}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        {formErrors && (
          <DisplayFormErrors formErrors={formErrors} state={"password"} />
        )}
      </div>

      {/* <div className="form-check d-flex justify-content-center mb-5">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
            <label className="form-check-label" htmlFor="form2Example33">
               Subscribe to our newsletter
            </label>
         </div> */}

      <button type="submit" className="btn btn-primary btn-block mb-5">
        Sign up
      </button>

      <div className="text-center">
        <p>or sign up with:</p>
        <button type="button" className="btn btn-secondary btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-secondary btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-secondary btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-secondary btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default RegisterUser;
