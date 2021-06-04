import { v4 as uuidv4 } from 'uuid';
import {firebase, database, dataBaseOrders} from '../firebase/firebase';

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
export const placeOrder = (orderData = {}) => {
    return (dispatch) => {
        const {
            name,
            email,
            address,
            phone,
            price,
            description,
            createdAt,
            quantity
        } = orderData;

        const order = {
            name, 
            email, 
            address, 
            phone, 
            price, 
            description,
            createdAt,
            quantity
        }

        dataBaseOrders.push(order).then((ref) => {
            dispatch(addOrder({
                id: ref.key,
                ...order
            }))
        })

    }
}

// REMOVE ORDER
export const removeOrder = ({id} = {}) =>({
    type: 'REMOVE_ORDER',
    id
})

// SET ORDER 
export const setOrders = (orders) => ({
    type: 'SET_ORDERS',
    orders
})
// EDIT ORDER
export const editOrder = (id, updates) => ({
    type: 'EDIT_ORDER',
    id,
    updates
})

// FETCH ORDERS
export const fetchOrders = () => {
    return (dispatch) => {
        return database.ref('data/orders').once('value').then((snapshot) => {
            const orderData = [];

            snapshot.forEach((childSnapshot) => {
                orderData.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setOrders(orderData));
        })
    }
}

export const deleteOrder = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`data/orders/${id}`).remove().then(() => {
            dispatch(removeOrder({id}));
        })
    }

}