import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers/reducers'
import {createLogger} from 'redux-logger';

const logger = createLogger();

const initialState = {isRTL: false};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

export default store
