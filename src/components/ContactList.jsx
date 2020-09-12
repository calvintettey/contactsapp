import React from 'react';
import Contact from './Contact';


let ContactList = (props) => {
    return (
        <div>
            {props.ContactList.map((contact) => {
                return <Contact 
                    name={contact.name} 
                    number={contact.number} 
                    email={contact.email} 
                    key={contact.id} 
                    // deleteContact={this.deleteContact}

                />
            })}
        </div>
    )
}

export default ContactList;