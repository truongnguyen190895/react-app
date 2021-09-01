const validation = (values) => {
  let error = {};

  if (!values.titleRef) {
    error.titleRef = "Vui Lòng Nhập Tên";
  }
  if (!values.openingTextRef) {
    error.openingTextRef = "Vui Lòng Nhập Tên";
  }
  return error;
};

export default validation;
