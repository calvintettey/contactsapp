let initialState = {
    contacts : [
        {name: "Kojo Asante", number: "0242742594", email: "kjasante@gmail.com"},
        {name: "Erika Senanu", number: "0277161222", email: "erikas@gmail.com"},
        {name: "Eyram Torglo", number: "0277573300", email: "etorglo@gmail.com"},
        {name: "Senyo King", number: "0244264645", email: "kingsenyo@gmail.com"},
      ]
}

let contactlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            let newContact = {
                name: action.payload.name,
                number: action.payload.number,
                email: action.payload.email,
            };
            return{...state, contacts:[...state.contacts, newContact]};
            
            
            break;
    
        default:
            return state;
    }
};


export default contactlistReducer;