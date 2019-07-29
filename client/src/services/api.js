import axios from "axios";

const login = (username, password, email) =>
  axios
    .post("/auth/login", {
      username: username,
      password: password,
      email: email
    })
    .then(response => response.data);

const signup = (username, password, email) =>
  axios
    .post("/auth/signup", {
      username: username,
      password: password,
      email: email
    })
    .then(response => response.data);

const logout = () => axios.post("/auth/logout").then(response => response.data);

export { login, logout, signup };
