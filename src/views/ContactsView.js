import React from "react";
import Contact from "../components/Contact";
import DataService from "../services/DataService";

class ContactsView extends React.Component {
  constructor() {
    super();
    const url = "https://phonebook24.herokuapp.com/api/contacts";
    DataService.get(url)
      .then((response) => this.setState({ contacts: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.contacts.map((contact) => (
            <Contact contact_data={contact} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactsView;
