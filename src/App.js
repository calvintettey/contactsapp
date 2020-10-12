import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import { logoutContact } from "./store/authActions";

export class App extends Component {
  render(){
    return (
      <div className="App">
        <button onClick={this.props.logoutContact}>Logout</button>
        <AddContactForm addContact ={this.addNewContact} />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  console.log(state);
  return {
  contacts: state.contactlistState.contacts,
}};

export default connect(mapStateToProps, {logoutContact})(App);