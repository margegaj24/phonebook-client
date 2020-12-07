import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import DataService from "../services/DataService";

export default function UpdateContact(props) {
  const url =
    "https://phonebook24.herokuapp.com/api/contacts/" + props.contact_id + "/";
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  function validateForm() {
    return first_name.length > 0 || last_name.length > 0;
  }

  function handleSubmit(event) {
    if (first_name.length > 0 && last_name.length > 0) {
      const data = {
        first_name: first_name,
        last_name: last_name,
        entries: [],
      };
      DataService.update(url, data).then();
    } else {
      if (first_name.length > 0) {
        const data = {
          first_name: first_name,
        };
        DataService.partial_update(url, data).then();
      } else {
        const data = {
          last_name: last_name,
        };
        DataService.partial_update(url, data).then();
      }
    }
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="text">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="text">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
