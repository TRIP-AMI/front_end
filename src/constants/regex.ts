const Regex = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,20}$/,
};

export default Regex;