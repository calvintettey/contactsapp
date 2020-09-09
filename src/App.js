import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addContact } from "./store/contactlistActions";
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';

export class App extends Component {
  
  
  addNewContact = (contact) => {
   this.props.addContact(contact)
  }

  render(){
    return (
      <div className="App">
        <AddContactForm addContact ={this.addNewContact} />
        <ContactList ContactList={this.props.contacts} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  contacts: state.contacts
});

let mapDispatchToProps = {
  addContact: addContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

