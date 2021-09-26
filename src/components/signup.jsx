import React from 'react';
import PageHeader from "./common/page-header";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config/config.json";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router-dom"

class Signup extends Form {

  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  }

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name")
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    data.biz = false;

    try {

      await http.post(`${apiUrl}/users`, data);
      toast("A new acoount is opened");

      this.props.history.replace('/signin');
    } catch (ex) {

      if (ex.response && ex.response.status === 400) {

        this.setState({ errors: { email: "Email is taken" } });

      }

    }

  }



  render() {

    if (userService.getCurrentUser()) return <Redirect to="/" />
    return (
      <div className="container">
        <PageHeader>Sign Up Page</PageHeader>
        <div className="row">
          <div className="col-12">
            <p>You can signup for free!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;