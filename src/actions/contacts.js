import { v4 as uuidv4 } from 'uuid';
import {database, databaseReview} from '../firebase/firebase';

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

export const postReview = (reviewData = {}) => {
    return (dispatch) => {
        const {
            name,
            email,
            city, 
            message
        } = reviewData

        const review = {
            name, email, city, message
        }

        databaseReview.push(review).then((ref) => {
            dispatch(addContact({
                id: ref.key,
                ...review
            }))
        })
    }
}

export const fetchReviews = () => {
    return (dispatch) => {
        return database.ref('data/reviews').once('value').then((snaptshot) => {
            const reviews = []
            snaptshot.forEach((childSnapshot) => {
                reviews.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setContacts(reviews))
        })
    }
}