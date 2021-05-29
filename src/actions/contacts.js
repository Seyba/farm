import { v4 as uuidv4 } from 'uuid';

// ADD CONTACT
export const addContact = ({
        name='', 
        email='', 
        city='',
        message=''
    } ={}) => ({
    type: 'ADD_CONTACT',
    contact: {
        id:uuidv4(),
        name,
        email,
        city,
        message
    }
})

// REMOVE CONTACT
export const removeContact = ({id} = {}) =>({
    type: 'REMOVE_CONTACT',
    id
})

// EDIT CONTACT
export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
})

// SET CONTACT
export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
})