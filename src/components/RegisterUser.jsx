import React, { useRef, useState } from "react";
import { actions } from "../state/reducer";

const RegisterUser = ({ dispatch }) => {
  const firstname = useRef(null);
  const lastname = useRef(null);
  const age = useRef(null);
  const job = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [formErrors, setFormErrors] = useState();

  const [picture, setProfPic] = useState();
  const onChange = (event) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const upload_img = reader.result;
      setProfPic(upload_img);
      // console.log(upload_img);
    });

    reader.readAsDataURL(event.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formBody = {
      picture,
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
        dispatch({ type: actions.ADD_USER, payload: newUser });

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

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        className="register-form col-lg-7 mx-auto shadow-lg container px-sm-5 py-4 bg-white rounded"
      >
        <h4 className="pb-3 fw-bold text-primary">Register</h4>
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
              inputName="firstname"
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
              inputName="lastname"
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
              inputName="age"
            />
          </div>

          {/* <!---------Job----------> */}
          <div className="col">
            <label htmlFor="job">Select Job</label>
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

            {formErrors && (
              <DisplayFormErrors formErrors={formErrors} inputName={"job"} />
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
          inputName="email"
        />

        {/* <!---------Password----------> */}
        <FormInput
          label_name="Password"
          type="password"
          id="password"
          classname="form-control"
          reference={password}
          formErrors={formErrors}
          inputName="password"
        />

        <div className="form-group mb-3">
          <input
            type="file"
            name="picture"
            id="picture"
            onChange={onChange}
            className="form-control"
          />
          <label htmlFor="picture">Choose Profile Picture</label>
          <DisplayFormErrors formErrors={formErrors} inputName="picture" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign up
        </button>
      </form>
    </div>
  );
};

const FormInput = ({
  label_name,
  type,
  id,
  classname,
  reference,
  formErrors,
  inputName,
}) => {
  return (
    <div className="form-group mb-4">
      <label
        className="form-label mb-0"
        htmlFor={id}
        style={{ fontSize: ".9rem" }}
      >
        {label_name}
      </label>
      <input
        type={type}
        id={id}
        className={`${classname}`}
        ref={reference}
        placeholder={`${label_name}`}
      />

      {formErrors && (
        <DisplayFormErrors formErrors={formErrors} inputName={inputName} />
      )}
    </div>
  );
};

const DisplayFormErrors = ({ formErrors, inputName }) => {
  let message;

  formErrors?.forEach((i) => {
    if (i.key === inputName) {
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
