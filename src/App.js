import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addContact, deleteContact } from "./store/contactlistActions";
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';

export class App extends Component {
  
  
  addNewContact = (contact) => {
   this.props.addContact(contact)
  };

  deleteContact = contact_id => {
    this.props.deleteContact(contact_id);
  };

  render(){
    return (
      <div className="App">
        <AddContactForm addContact ={this.addNewContact} />
        <ContactList contacts={this.props.contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  contacts: state.contacts
});

let mapDispatchToProps = {
  addContact: addContact,
  deleteContact: deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

