import React from "react";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useState } from "react";
import DataService from "../services/DataService";

export default function UpdateEntry(props) {
  const url =
    "https://phonebook24.herokuapp.com/api/entry/" + props.entry_id + "/";
  const [entry_type, setEntryType] = useState("");
  const [number, setPhoneNumber] = useState("");

  function validEntryType() {
    let valid_entry_types = ["Home", "Work", "Cell Phone"];
    if (valid_entry_types.includes(entry_type)) return true;
    return false;
  }

  function validPhoneNumber() {
    if (number.length > 0 && number.length < 14) return true;
    return false;
  }

  function validateForm() {
    return validPhoneNumber() || validEntryType();
  }

  function handleSubmit(event) {
    if (entry_type.length > 0 && number.length > 0) {
      const data = {
        entry_type: entry_type,
        number: number,
        contact_id: props.contact_id,
      };
      DataService.update(url, data).then((response) => {});
    } else {
      var data = {};
      if (entry_type.length > 0)
        data = {
          entry_type: entry_type,
          contact_id: props.contact_id,
        };
      else
        data = {
          number: number,
          contact_id: props.contact_id,
        };
      DataService.update(url, data).then((response) => {});
    }
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="text">
          <FormLabel>Type</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={entry_type}
            onChange={(e) => setEntryType(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="text">
          <FormLabel>Phone Number</FormLabel>
          <FormControl
            value={number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Update
        </Button>
      </form>
    </div>
  );
}
