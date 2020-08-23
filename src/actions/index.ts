import { GitHubResult, SearchAction, SearchInputAction } from './../interfaces/types';
import { SEARCH_RESULT, SEARCH_CATEGORY,  SEARCH_ERROR, SEARCH_TEXT } from "./actionType";
import { trackPromise} from 'react-promise-tracker';
import axios from 'axios';
import { Dispatch } from 'redux';


export const searchResultAction = (searchResult: GitHubResult[]): SearchAction => {
    return {
        type: SEARCH_RESULT,
        searchResult
    }
}

export const searchErrorAction = () => {
    return {
        type: SEARCH_ERROR,
    }
}

export const searchCategoryAction = (searchCategory: string): SearchInputAction => {
    return {
        type: SEARCH_CATEGORY,
        searchCategory,
    }
}

export const searchInputAction = (searchText : string): SearchInputAction => {
    return {
        type: SEARCH_TEXT,
        searchText
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
        await trackPromise(
         axios
            .get(url)
            .then(res => {
                dispatch(searchResultAction(res.data.items));
            })
            .catch(error => {
                dispatch(searchErrorAction);
                console.log(error);
            }))
    }
}