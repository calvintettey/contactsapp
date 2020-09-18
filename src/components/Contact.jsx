import React from 'react';
import { Link } from "react-router-dom";

let Contact = ({ deleteContact, id, ...props}) => {
    let handleClick = () => {
        deleteContact(id)
    }
    return (
        <div>
            <h3>{props.name} </h3>
            <p>{props.number} </p>
            <p>{props.email} </p>
            <button onClick={handleClick}>Delete Contact</button>
            <Link to={`/edit/${id}`}>Edit Contact</Link>
            <hr />
        </div>
    );
}

export default Contact;