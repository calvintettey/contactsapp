import React from 'react';
import { Link } from "react-router-dom";
import { deleteContact } from "../store/contactlistActions";
import { connect } from "react-redux";


let Contact = ({ name, number, email, deleteContact, ...props}) => {
    const handleClick = () => {
        deleteContact(props.id);
    }
    console.log("id is", props.id)
    return (
        <div>
            <h3>{name} </h3>
            <p>{number} </p>
            <p>{email} </p>
            <button onClick={handleClick}>Delete Contact</button>
            <button><Link to={`/edit/${props.id}`}>Edit Contact</Link></button>
            <hr />
        </div>
    );
};

export default connect (null, { deleteContact })(Contact);