export let addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}
