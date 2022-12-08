import React from "react";

const SignInUser = () => {
  let formBody = {};
  const onChange = ({ target }) => {
    const { name, value } = target;
    formBody = {
      ...formBody,
      [name]: value,
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formBody);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form
        onChange={(e) => onChange(e)}
        onSubmit={(e) => onSubmit(e)}
        className="login-form col-md-7 container shadow-lg px-sm-5 py-4 bg-white rounded"
      >
        {/* <!-- Email input --> */}
        <h4 className="pb-3 fw-bold text-primary">Sign in</h4>
        <div className="form-outline mb-4">
          <input
            type="email"
            name="email"
            id="form1Example1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            id="form1Example2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1Example2">
            Password
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignInUser;
