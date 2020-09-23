import React from 'react';
import { Link } from "react-router-dom";

let Contact = ({ removeContact, id, ...props}) => {
    const handleClick = () => {
        Contact(id)
    }
    return (
        <div>
            <h3>{props.name} </h3>
            <p>{props.number} </p>
            <p>{props.email} </p>
            <button onClick={handleClick}>Delete Contact</button>
            <button><Link to={`/edit/${id}`}>Edit Contact</Link></button>
            <hr />
        </div>
    );
}

export default Contact;