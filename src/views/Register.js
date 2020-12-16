import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Login from "./Login";
import "./Login.css";
import axios from "axios";

export default function Register() {
  const url = "http://localhost:8000/register";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0 && email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
      email: email,
    };
    axios
      .post(url, data, {
        headers: {
          "Content-type": "application/json",
          //"Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        alert(response.data);
        ReactDOM.render(<Login />, document.getElementById("root"));
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="text">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
