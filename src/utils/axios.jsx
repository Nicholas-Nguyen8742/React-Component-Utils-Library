import axios from "axios";

// Handle Login Axios Request
export const handleLogin = (event) => {
  event.preventDefault();
  const { email, password } = this.state;
  axios
    .post("http://localhost:8080/auth/login", {
      email,
      password,
    })
    .then((response) => {
      sessionStorage.setItem("token", response.data.token);
      this.setState({ success: true, user: response.data.user.id });
      event.target.reset();
    })
    .catch((error) => {
      this.setState({ error: error.response.data });
    });
};
