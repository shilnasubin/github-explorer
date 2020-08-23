import thunkMiddleware from 'redux-thunk';
import allReducers from '../reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export const persistor = persistStore(store);
