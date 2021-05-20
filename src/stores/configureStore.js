import { createStore, combineReducers, applyMiddleware, compose} from "redux"
import contactReducer from '../reducers/contacts';
import orderReducer from '../reducers/orders';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactReducer,
            orders: orderReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store 
};