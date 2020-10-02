import { getFirestore } from "redux-firestore";

export let addContact = (contact) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
          .collection("All Contacts")
          .add({...contact, timestamp: getFirestore().FieldValue.serverTimestamp()})
          .then((doc) => {
            dispatch({
            })
          });
      };
};


export let deleteContact = (contact_id) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection('All Contacts')
        .doc(contact_id)
        .delete()
        .then(()=>{
          
        });
      }; 
};

export let editContact = (contact_id, updated_info) => {
    console.log("info", updated_info);
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection('All Contacts')
        .doc(contact_id)
        .set(updated_info)
        .then(()=>{})
        .catch((err)=>{});
      };
};

export let getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
      getFirestore()
      .collection('All Contacts')
      .orderBy('name', 'asc')
      .onSnapshot(
        (snapshot)=>{
        let allcontacts = [];
        snapshot.forEach((doc) => {
           
          allcontacts.push({...doc.data(), id: doc.id});
        });
        console.log(allcontacts);
        dispatch({
          type:"SET_ALL_CONTACTS",
          payload: allcontacts,
        }); 
      },
      (err) => {
  
      }
      )
    }
  }