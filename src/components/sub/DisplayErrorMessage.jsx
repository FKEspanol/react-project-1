const DisplayFormErrors = ({ formErrors, state }) => {
  let message;
  formErrors.forEach((i) => {
    if (i.key === state) {
      message = i.errorMessage;
    }
  });

  return <p className="form-text text-danger">{message}</p>;
};

export default DisplayFormErrors;
