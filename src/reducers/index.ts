import { persistor } from './../store';
import SearchResultReducer from './searchResultReducer';
import SearchCategoryReducer from './searchCategoryReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['searchResult']
}
const allReducers = combineReducers({
    searchCategory: SearchCategoryReducer,
    searchResult: SearchResultReducer
});

export default persistReducer(persistConfig, allReducers);