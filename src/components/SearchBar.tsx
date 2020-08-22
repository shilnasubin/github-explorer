import React, { useState, useEffect, FunctionComponent, useCallback } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchCategoryAction, getSearchAction, searchResultAction } from '../actions';
// import { CATEGORY_LIST } from '../constants/constants';
// import debounce from 'lodash.debounce';
import { CATEGORY_LIST } from '../constants/constants';
import "./SearchBar.scss";
import debounce from 'lodash.debounce';


const SearchBar: FunctionComponent = () => {
    const searchCategories = CATEGORY_LIST;
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();
    const category = useSelector(state => (state as any).searchCategory);

    const onSearchCategoryChange = (event: any) => {
        dispatch(searchCategoryAction(event.target.value));
        if (searchText.length > 2) {
            dispatch(getSearchAction(searchText, event.target.value));
        }
    }

    const onSearchTextChange = (event: any) => {
        setSearchText(event.target.value)
    }

    const debouncedDispatch = useCallback(debounce((text: string, cat: string) => dispatch(getSearchAction(text, cat)), 500), []);

    useEffect(() => {
        if (searchText.length > 2) {
            debouncedDispatch(searchText, category);

            // Cancel previous debounce calls during useEffect cleanup.
            return debouncedDispatch.cancel;
        }
        else{
            dispatch(searchResultAction([]));
        }

    }, [searchText])

    return (
        <div className="search-bar">
            <div className="title-block">
                <img className="logo" src="images/github-logo.png" alt="github-logo" />
                <div className="details">
                    <h1 className="title">GitHub Explorer</h1>
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