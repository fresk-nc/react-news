import { createStore, applyMiddleware } from 'redux';
import api from 'middleware/api';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, api)
    );
}
