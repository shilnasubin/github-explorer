import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';

export const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export const persistor = persistStore(store);
