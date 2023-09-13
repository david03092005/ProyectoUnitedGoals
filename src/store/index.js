import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from './Reducers'


const Middleware = [thunk];

const composeEnhancers = composeWithDevTools(
    applyMiddleware(...Middleware)
);

const store = createStore(
    allReducers,
    composeEnhancers
);

export default store;
