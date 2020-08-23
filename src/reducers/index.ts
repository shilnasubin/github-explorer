import searchInputReducer from './searchInputReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { searchResultReducer } from './searchResultReducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['searchResult']
}
const allReducers = combineReducers({
    searchInput: searchInputReducer,
    searchResult: searchResultReducer,
});

export default persistReducer(persistConfig, allReducers);