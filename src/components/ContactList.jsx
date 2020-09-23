import React from "react";
import Contact from "./Contact";

let ContactList = (props, deleteContact) => {
  const contactInfo = props.contacts.map((contact) => (
    <Contact
      name={contact.name}
      email={contact.email}
      number={contact.number}
      key={contact.id}
    />
  ));
  return <div>{contactInfo}</div>;
  // return (
  //     <div>
  //         { props.ContactList.map((props.contact) =>
  //             <Contact
  //                 name={contact.name}
  //                 number={contact.number}
  //                 email={contact.email}
  //                 key={contact.id}
  //                 // deleteContact={this.deleteContact}

  //             />
  //         )
  //         }
  //     </div>
  // )
};

export default ContactList;
