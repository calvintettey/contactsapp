import React, { Component } from 'react';

let Contact = (props) => {
    return (
        <div>
            <h3>{props.name} </h3>
            <p>{props.number} </p>
            <p>{props.email} </p>
            <hr />
        </div>
    );
}

export default Contact;