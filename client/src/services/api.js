import axios from "axios";

const login = (username, password, email) =>
  axios
    .post("/api/auth/login", {
      username: username,
      password: password,
      email: email
    })
    .then(response => response.data);

const signup = (username, password, email) =>
  axios
    .post("/api/auth/signup", {
      username: username,
      password: password,
      email: email
    })
    .then(response => response.data);

const logout = () =>
  axios.post("/api/auth/logout").then(response => response.data);

const profile = (username, password, email) =>
  axios
    .post("/api/profile", {
      username: username,
      password: password,
      email: email
    })
    .then(response => response.data);

export { login, logout, signup, profile };
