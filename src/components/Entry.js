import React from "react";
import ReactDOM from "react-dom";
import { Card, Button } from "react-bootstrap";
import UpdateEntry from "../views/UpdateEntry";

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  updateEntry() {
    ReactDOM.render(
      <UpdateEntry
        entry_id={this.props.entry_data.id}
        contact_id={this.props.contact_id}
      />,
      document.getElementById("root")
    );
  }

  deleteEntry() {}

  render() {
    return (
      <li>
        <Card.Text>{this.props.entry_data.entry_type}</Card.Text>
        <Card.Text>{this.props.entry_data.number}</Card.Text>
        <Button bg="primary" variant="primary" onClick={this.updateEntry}>
          Update
        </Button>
        <Button bg="danger" variant="primary" onClick={this.deleteEntry}>
          Delete
        </Button>
      </li>
    );
  }
}
