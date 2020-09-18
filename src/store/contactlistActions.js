export let addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}


export let deleteContact = (contact_id) => {
    return {
        type: "DELETE_CONTACT",
        payload: contact_id
    }
}

export let editContact = (contact_id, updated_info) => {
    return {
        type: "EDIT_CONTACT",
        contact_id, 
        updated_info
    }
}