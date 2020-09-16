import React from 'react';

let Contact = ({ deleteContact, id, ...props}) => {
    let handleClick = () => {
        deleteContact(id)
    }
    return (
        <div>
            <h3>{props.name} </h3>
            <p>{props.number} </p>
            <p>{props.email} </p>
            <button onClick={handleClick}>Delete User</button>
            <hr />
        </div>
    );
}

export default Contact;