import { SEARCH_ERROR, SEARCH_REQUEST } from './../actions/actionType';
import { SEARCH_RESULT } from "../actions/actionType";
import { SearchAction, SearchResultState } from '../interfaces/types';

var intialState : SearchResultState = {
    items: [],
    isError: false,
}

export const searchResultReducer = (state = intialState, action: SearchAction) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, items: [], isLoading: true, soman: "SOMAN" };
        case SEARCH_RESULT:
            return { ...state, items: action.searchResult, isLoading: false, soman: "SASI" };
        case SEARCH_ERROR:
            return { ...state, items: [], isError: true, isLoading: false };
        default:
            return state;
    }
}
