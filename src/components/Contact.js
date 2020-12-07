import React from "react";
import ReactDOM from "react-dom";
import Entry from "./Entry";
import { Card, Button } from "react-bootstrap";
import UpdateContact from "../views/UpdateContact";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.updateButton = this.updateButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  updateButton() {
    ReactDOM.render(
      <UpdateContact contact_id={this.props.contact_data.id} />,
      document.getElementById("root")
    );
  }

  deleteButton() {}

  render() {
    return (
      <li>
        <Card
          className="text-center"
          border="primary"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title bg="danger" position="center">
              {this.props.contact_data.first_name +
                this.props.contact_data.last_name}
            </Card.Title>
            <ul>
              {this.props.contact_data.entries.map((entry) => (
                <Entry
                  entry_data={entry}
                  contact_id={this.props.contact_data.id}
                />
              ))}
            </ul>
            <Button bg="primary" variant="primary" onClick={this.updateButton}>
              Update Contact
            </Button>
            <Button bg="danger" variant="primary" onClick={this.deleteButton}>
              Delete Contact
            </Button>
          </Card.Body>
        </Card>
      </li>
    );
  }
}
