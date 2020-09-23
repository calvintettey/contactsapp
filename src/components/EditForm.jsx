import React, { Component } from "react";
import { connect } from "react-redux";
import { editContact } from "../store/contactlistActions";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contact.name,
      number: props.contact.number,
      email: props.contact.email,
    };
    this.id = props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
    };
    console.log(updatedInfo);

    this.props.editContact(this.id, updatedInfo);
    this.setState({
      name: "",
      number: "",
      email: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <div>
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div>
            <button type="submit">Edit Contact</button>
          </div>
        </form>
      </>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts.find(
      (contact) => contact.id === ownProps.match.params.id
    ),
  };
};

let mapDispatchToProps = {
  editContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
