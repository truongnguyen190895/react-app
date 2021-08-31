const validation = (values) => {
  let error = {};

  if (!values.titleRef) {
    error.titleRef = "Name is required";
  }
  if (!values.openingTextRef) {
    error.openingTextRef = "Name is required";
  }
  return error;
};

export default validation;
