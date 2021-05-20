import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAa4GvH3zQfAlhohyFd9IlgeffZRpNpk8c",
    authDomain: "soumppoukaffofarm-4fa54.firebaseapp.com",
    databaseURL: "https://soumppoukaffofarm-4fa54-default-rtdb.firebaseio.com",
    projectId: "soumppoukaffofarm-4fa54",
    storageBucket: "soumppoukaffofarm-4fa54.appspot.com",
    messagingSenderId: "83661903523",
    appId: "1:83661903523:web:08bdd58566914a8d75d116",
    measurementId: "G-7ZXSNKX8SP",
    storageBucket: "gs://soumppoukaffofarm-4fa54.appspot.com"
};

firebase.initializeApp(config);
const database = firebase.database();
const storage = firebase.storage();

const dataBaseOrders = firebase.database().ref('data/orders');
const reviews = firebase.database().ref('data/reviews');
const gsReference = storage.refFromURL('gs://soumppoukaffofarm-4fa54.appspot.com/images/eggplant.jpg');


export {firebase, database, dataBaseOrders, storage}
// orders.push({
//     description:"whole lamb",
//     quantity: 2,
//     price: 230,
//     address: '134 river ave'
// });

// orders.push({
//     description:"34 Boxes of Eggplant",
//     quantity: 34,
//     price: 300,
//     address: '1901 Hennessy PL, Bronx, NY'
// });

// reviews.push({
//     name: 'Jessica Moore',
//     city: 'Manhattan',
//     message: 'Excellente Service!',
//     email: 'jess@gmail.com'
// })

// reviews.push({
//     name: 'Anna Jackson',
//     city: 'Queens',
//     message: 'Poor Service!',
//     email: 'anna@gmail.com'
// })

// reviews.push({
//     name: 'Jibrael Sow',
//     city: 'Brooklyn',
//     message: 'Great Service!',
//     email: 'Jibrael@gmail.com'
// })

// reviews.set({
//     name: 'Moussa Sow',
//     city: 'Bronx',
//     message: 'Great service, fast delivery and great meat quality',
//     email: 'moussa@gmail.com'
// }).then(() => {
//     console.log('review saved!');
// }).catch((e) => {
//     console.log('oops something went wrong!', e)
// })

// reviews.once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => console.log('data fetch failed!', e))

// orders.on('value', (snapshot) => {
//     console.log(snapshot.val());
// })
// const users = firebase.database().ref('data/users');
// const orderMatch = firebase.database().ref('data/orders/-Ma3lY2agS-RF_WZkTy7');
// users.set({
//     name: 'mohmo tirera',
//     email: 'mmohmo@yahoo.com',
//     password: '124abc0832'
// })


// users.push({
//     name: 'Jennifer Lopez',
//     email: 'jlo@jlo.com',
//     password: '124980/3948/83948/'
// })
// users.once('value').then((snapshot) => {
//     console.log(snapshot.val())
// } ).catch((e) => console.log('something went wrong', e))

// users.on('value', snapshot => {
//     console.log(snapshot.val())
// })

// orders.once('value').then(snapshot => {
//     const orderData = [];
//     snapshot.forEach((childSnapshot) => {
//         orderData.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//         console.log(orderData)
//     })
// })

// orders.push({
//     description:"89 Chicken",
//     quantity: 89,
//     price: 310,
//     address: '12 West 179th st Bronx, NY'
// });

// orders.on('value', (snapshot) => {
//     const orderData = [];
//     snapshot.forEach((childSnapshot) => {
//         orderData.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//         console.log(orderData)
//     })
// })

// orders.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })