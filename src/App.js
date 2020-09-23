import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addContact, deleteContact } from "./store/contactlistActions";
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';

export class App extends Component {
  render(){
    return (
      <div className="App">
        <AddContactForm addContact ={this.addNewContact} />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(App);

