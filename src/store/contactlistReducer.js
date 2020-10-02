import { v4 as uuid } from "uuid";

let initialState = {
    contacts : [
        {id: "1", name: "Erika Senanu", number: "0277161222", email: "erikas@gmail.com"},
        {id: "2", name: "Eyram Torglo", number: "0277573300", email: "etorglo@gmail.com"},
        {id: "3", name: "Senyo King", number: "0244264645", email: "kingsenyo@gmail.com"},
        {id: "4", name: "Kojo Asante", number: "0242742594", email: "kjasante@gmail.com"},
      ]
}

let contactlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            let newContact = {
                id: uuid(),
                name: action.payload.name,
                number: action.payload.number,
                email: action.payload.email,
            };
            return{...state, contacts:[...state.contacts, newContact]};
            
            
            case "DELETE_CONTACT":
                let filteredContacts = state.contacts.filter(contact => contact.id !==action.payload);
                return {...state, contacts:filteredContacts}

            case "EDIT_CONTACT":
                console.log("edit reducer here")
                let updatedContacts = state.contacts.map(contact => {
                    if (contact.id === action.contact_id) {
                    return{...contact, ...action.updated_info}
                    } else {
                    return contact;
                    }
                });
                return{...state, contacts: updatedContacts}

            case "SET_ALL_CONTACTS":
                return{ contacts: action.payload };  
    
        default:
            return state;
    }
};


export default contactlistReducer;