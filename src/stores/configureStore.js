import { createStore, combineReducers } from "redux"
import contactReducer from '../reducers/contacts';
import orderReducer from '../reducers/orders';

export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactReducer,
            orders: orderReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store 
};