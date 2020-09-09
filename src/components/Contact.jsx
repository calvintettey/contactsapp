import React, { Component } from 'react';

let Contact = (props) => {
    return (
        <div>
            <h3>Name: {props.name} </h3>
            <h4>Number: {props.number} </h4>
            <p>Email: {props.email} </p>
            <hr/>
        </div>
    );
}

export default Contact;