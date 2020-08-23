import { SEARCH_TEXT } from '../actions/actionType';
import { SEARCH_CATEGORY } from "../actions/actionType";
import { CATEGORY_LIST } from "../constants/constants";
import { SearchInputAction } from '../interfaces/types';

const searchCategory = CATEGORY_LIST.length > 0 ? CATEGORY_LIST[0] : '';
const initialState = {
    searchCategory,
    searchText: ""
}
const searchInputReducer = (state = initialState, action: SearchInputAction) => {
    switch (action.type) {
        case SEARCH_CATEGORY:
            return { ...state, searchCategory: action.searchCategory }
        case SEARCH_TEXT:
            return { ...state, searchText: action.searchText }
        default:
            return state;
    }
}

export default searchInputReducer;