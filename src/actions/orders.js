import { v4 as uuidv4 } from 'uuid';

// ADD ORDER
export const addOrder = ({
        name='', 
        email='', 
        address='', 
        phone=0, 
        price=0,
        description='', 
        createdAt=0, 
        quantity=0
    } ={}) => ({
    type: 'ADD_ORDER',
    order: {
        id:uuidv4(),
        name,
        email,
        address,
        phone,
        price,
        description,
        createdAt,
        quantity
    }
})

// REMOVE ORDER
export const removeOrder = ({id} = {}) =>({
    type: 'REMOVE_ORDER',
    id
})

// EDIT ORDER
export const editOrder = (id, updates) => ({
    type: 'EDIT_ORDER',
    id,
    updates
})