import React, { useState, useEffect } from 'react';
import "./SearchBar.scss";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import searchAction from '../actions';

const SearchBar = () => {
    const searchCategories = ["Users", "Repositories", "Issues"];
    const [searchText, setSearchText] = useState("");
    const [searchCategory, setSearchCategory] = useState(searchCategories[0]);

    const baseUrl = "https://api.github.com/search";
    const dispatch = useDispatch();
    const fetchData = async() => {
        let url = "";
        switch (searchCategory) {
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
            console.log("RES", res.data.items);
            dispatch(searchAction(res.data.items));
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (searchText.length > 2) {
            fetchData();
        }
        else {
            dispatch(searchAction([]));
        }
    }, [searchText, searchCategory])
    return (
        <div>
            <div className="search-bar">
                <div className="title-block">
                    <img className="logo" src="github-logo.png" alt="github-logo" />
                    <div className="details">
                        <h1 className="title">GitHub Searcher</h1>
                        <p>Search users or repositories below</p>
                    </div>
                </div>
                <div className="github-search">
                    <input type="text" name="searchText" id="searchText" value={searchText} onChange={e => setSearchText(e.target.value)} />
                    <select name="searchItem" id="searchCategory" value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
                        {
                            searchCategories.map((category, index) => {
                                return <option value={category} key={index}>{category}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            
        </div>
    )
}

export default SearchBar;