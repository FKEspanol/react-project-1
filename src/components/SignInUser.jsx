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
    <form
      onChange={(e) => onChange(e)}
      onSubmit={(e) => onSubmit(e)}
      className="col-md-7 m-auto mt-5 shadow-lg p-5 bg-white rounded"
    >
      {/* <!-- Email input --> */}
      <h2 className="pb-3">Sign in</h2>
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
  );
};

export default SignInUser;
