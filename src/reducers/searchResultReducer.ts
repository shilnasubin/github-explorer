import { SEARCH_REQUEST, SEARCH_ERROR } from './../actions/actionType';
import { SEARCH_RESULT } from "../actions/actionType";
import { SearchAction, SearchResultState } from '../interfaces/types';

var intialState : SearchResultState = {
    items: [],
    isLoading: false,
    isError: false,
}

const searchResultReducer = (state = intialState, action: SearchAction) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, items: [], isLoading: true };
        case SEARCH_RESULT:
            return { ...state, items: action.searchResult, isLoading: false };
        case SEARCH_ERROR:
            return { ...state, items: [], isError: true, isLoading: false };
        default:
            return state;
    }
}

export default searchResultReducer;