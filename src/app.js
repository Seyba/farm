import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import { addOrder, removeOrder, updateOrder } from './actions/orders';
import { addContact, removeContact, updateContact} from './actions/contacts';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
import validator from 'validator' 
// const userEmail = validator.isEmail('djdjdkdkd.com');
// console.log('test',userEmail);
// const  validatePhoneNumber = (elementValue) => {
//     const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//     return phoneNumberPattern.test(elementValue);
// }
// console.log(validatePhoneNumber('(646)4799307'));

// const checkNum = num => {
//     const isValidNum = validator.isMobilePhone(num)
//     return(isValidNum)
// }
// const myNum = '394839384';
// console.log(checkNum(myNum));

const store = configureStore();

// store.dispatch(
//     addOrder({
//         name:"John Doe", 
//         email:"johnDoe@gmail.com", 
//         phone:349484493, 
//         price:603, 
//         description:'34 box of okra',
//         createdAt:350880, 
//         address:"1839 river ave",
//         quantity: 1
//     })
// )

// store.dispatch(
//     addOrder({
//         name:"Nancy Moore", 
//         email:"nancyDoMore@gmail.com", 
//         phone:6464799306, 
//         price:30300, 
//         description:'3 Box of Eggplant',
//         createdAt:-10000, 
//         address:"19 East 4th Av, Mahanttan",
//         quantity: 3
//     })
// )
// store.dispatch(addContact({name:'moussa',email:'moussa@gmail.com', message:'this is great', city:'bronx',phone:238839483}))

// store.dispatch(removeContact({id: "80a12c6b-e862-4ffd-bffc-e7d87a5ceb85"}))
// const state = store.getState();
// console.log(state)

const farm = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(farm, document.getElementById('root'))