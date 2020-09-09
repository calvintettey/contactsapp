import React, { Component } from 'react';
import Contact from './Contact';

let ContactList = (props) => {
    return (
        <div>
            {props.ContactList.map((contact, index) => {
                return <Contact 
                    name={contact.name} 
                    number={contact.number} 
                    email={contact.email} 
                    key={index} 
                />
            })}
        </div>
    )
}

export default ContactList;