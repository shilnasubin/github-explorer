import React, { useEffect, FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchAction, searchResultAction, searchInputAction, searchCategoryAction } from '../actions';
import { CATEGORY_LIST } from '../constants/constants';
import debounce from 'lodash.debounce';
import { AppState } from '../interfaces/types';
import { useHistory } from 'react-router-dom';
import "./SearchBar.scss";

const SearchBar: FunctionComponent = () => {
    const searchCategories = CATEGORY_LIST;

    const history = useHistory();
    const dispatch = useDispatch();

    const category = useSelector(state => (state as AppState).searchInput.searchCategory as string);
    const searchText = useSelector(state => (state as AppState).searchInput.searchText as string);

    // category dropdown change event
    const onSearchCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(searchCategoryAction(event.target.value));
        if (searchText.length > 2) {
            dispatch(getSearchAction(searchText, event.target.value));
        }
    }

    // search text change event
    const onSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // dispatch(searchRequestAction);
        dispatch(searchInputAction(event.target.value));
    }

    const debouncedDispatch = useCallback(debounce((text: string, cat: string) => dispatch(getSearchAction(text, cat)), 300), []);

    useEffect(() => {
        if (searchText.length > 2) {

            // dispatch(searchRequestAction);
            debouncedDispatch(searchText, category);

            // change route to results page
            history.push("/result");

            // Cancel previous debounce calls during useEffect cleanup.
            return debouncedDispatch.cancel;
        }
        else {
            dispatch(searchResultAction([]));

            // reset route
            history.push("/");
        }
    })

    return (
        <div className="search-bar">
            <div className="title-block">
                <img className="logo" src="images/github-logo.png" alt="github-logo" />
                <div className="details">
                    <h1 className="title">GitHub Searcher</h1>
                    <p>Search users or repositories below</p>
                </div>
            </div>
            <div className="github-search">
                <input type="text" className="search-text" placeholder="Start typing to search .." value={searchText} onChange={onSearchTextChange} />
                <select className="search-category" name="searchCategory" id="searchCategory" value={category} onChange={onSearchCategoryChange}>
                    {
                        searchCategories.map((ct, index) => {
                            return <option value={ct} key={index}>{ct}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default SearchBar;