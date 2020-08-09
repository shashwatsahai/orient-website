import React, { Component } from "react";
//import { Map, GoogleApiWrapper } from "google-maps-react";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";
import { isEmail } from "validator";
import "./FormElement.css";

class FormElement extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: "",
      },
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.firstName === "")
      errors.firstName = "First Name can not be blank.";
    if (data.lastName === "") errors.lastName = "Last Name can not be blank.";
    if (!isEmail(data.email)) errors.email = "Email must be valid.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Passwords must match.";

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      console.log(data);
      //Call an api here
      //Resetting the form
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form className="main-form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="firstName" required>
            First Name
          </Label>
          <Input
            id="firstName"
            value={data.firstName}
            invalid={errors.firstName ? true : false}
            name="firstName"
            onChange={this.handleChange}
            required
          />
          <FormFeedback>{errors.firstName}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={data.lastName}
            invalid={errors.lastName ? true : false}
            name="lastName"
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.lastName}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={data.companyName}
            invalid={errors.companyName ? true : false}
            name="companyName"
            onChange={this.handleChange}
            required
          />
          <FormFeedback>{errors.companyName}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="contactNumber">Contact Number</Label>
          <Input
            id="contactNumber"
            value={data.contactNumber}
            invalid={errors.contactNumber ? true : false}
            name="contactNumber"
            onChange={this.handleChange}
            required
          />
          <FormFeedback>{errors.contactNumber}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="city">City</Label>
          <Input
            id="city"
            value={data.city}
            invalid={errors.city ? true : false}
            name="city"
            onChange={this.handleChange}
            required
          />
          <FormFeedback>{errors.city}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            value={data.email}
            invalid={errors.email ? true : false}
            name="email"
            onChange={this.handleChange}
            required
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>

        <Button color="primary">Register</Button>
      </Form>
    );
  }
}

export default FormElement;
