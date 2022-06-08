// Handles Controlled Change
export const handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
};
