import React, { Component } from "react";
import "./SignIn.css";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import { AiFillGoogleCircle } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { withRouter } from "react-router";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      text: "Sign In",
    };
  }

  componentDidMount() {}

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value }, console.log(this.state));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.log(e);
    }
  };

  handleClick = () => {
    setTimeout(() => {
      this.setState({ text: "Signing In " });
      this.props.history.push("/home");
    }, 500);
  };

  render() {
    return (
      <IconContext.Provider value={{ size: "28px" }}>
        <div className="sign-in" style={{ textAlign: "center" }}>
          <h2 className="title">Login with E-Mail and Password</h2>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              required
              label="Password"
              handleChange={this.handleChange}
            />
            <CustomButton type="submit" onClick={this.handleClick}>
              <VscSignIn className="icon" />
              {this.state.text}
            </CustomButton>
          </form>
        </div>
      </IconContext.Provider>
    );
  }
}

export default withRouter(SignIn);
