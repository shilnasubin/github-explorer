import { GitHubResult, SearchAction, SearchCategoryAction } from './../interfaces/types';
import { SEARCH_RESULT, SEARCH_CATEGORY, SEARCH_REQUEST, SEARCH_ERROR } from "./actionType"
import axios from 'axios';
import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';

export const searchRequestAction = (): SearchAction => {
    return {
        type: SEARCH_REQUEST,
    }
}

export const searchResultAction = (searchResult: GitHubResult[]): SearchAction => {
    return {
        type: SEARCH_RESULT,
        searchResult
    }
}

export const searchErrorAction = (): SearchAction => {
    return {
        type: SEARCH_ERROR,
    }
}

export const searchCategoryAction = (searchCategory: string): SearchCategoryAction => {
    return {
        type: SEARCH_CATEGORY,
        searchCategory
    }
}


const baseUrl = "https://api.github.com/search";
export const getSearchAction = (searchText: string, category: string) => {
    return async (dispatch: Dispatch<any>) => {
        let url = "";
        switch (category) {
            case "Users":
                url = `${baseUrl}/users?q=${searchText}`;
                break;
            case "Repositories":
                url = `${baseUrl}/repositories?q=${searchText}`;
                break;
            case "Issues":
                url = `${baseUrl}/issues?q=${searchText}`;
                break;
        }
        await axios
            .get(url)
            .then(res => {
                dispatch(searchResultAction(res.data.items));
            })
            .catch(error => {
                dispatch(searchErrorAction);
                console.log(error);
            })
    }
}