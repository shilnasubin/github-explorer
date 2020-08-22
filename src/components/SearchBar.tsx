import React, { useState, useEffect, FunctionComponent } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchCategoryAction, getSearchAction, searchRequestAction } from '../actions';
// import { CATEGORY_LIST } from '../constants/constants';
// import debounce from 'lodash.debounce';
import { CATEGORY_LIST } from '../constants/constants';
import "./SearchBar.scss"; 


const SearchBar : FunctionComponent = () => {
    const searchCategories = CATEGORY_LIST;
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();
    const category = useSelector(state => (state as any).searchCategory);

    const onSearchCategoryChange = (event: any) => {
        dispatch(searchCategoryAction(event.target.value));
    }


    // const delayedQuery = useCallback(debounce(dispatch(getSearchAction(searchText, category)), 500), [searchText]);
    // setTimeout(() => {
    //     fetchData(category);
    // },300);

    useEffect(() => {
        // Cancel previous debounce calls during useEffect cleanup.
        // return delayedQuery.cancel;
        if (searchText.length > 2) {
            // delayedQuery(dispatch);
            dispatch(searchRequestAction);
            console.log("CATEGORY : ", category, " SEARCH : ", searchText);
            dispatch(getSearchAction(searchText, category));
        }

    }, [searchText, category])

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
                <input type="text" className="search-text" placeholder="Start typing to search .." value={searchText} onChange={e => setSearchText(e.target.value)} />
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