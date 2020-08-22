import SearchResultReducer from './searchResultReducer';
import SearchCategoryReducer from './searchCategoryReducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    searchCategory: SearchCategoryReducer,
    searchResult: SearchResultReducer
});

export default allReducers;