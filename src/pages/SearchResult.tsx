import React, { useEffect, FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import './SearchResult.scss';
import User from '../components/User';
import Repository from '../components/Repository';
import { AppState, GitHubResult } from '../interfaces/types';

const SearchResult: FunctionComponent = () => {
    const items = useSelector(state => (state as AppState).searchResult.items);
    const xxxx = useSelector(state => (state as AppState).searchResult);
    const isLoading = useSelector(state => (state as AppState).searchResult.isLoading);
    const isError = useSelector(state => (state as AppState).searchResult.isError);
    const category = useSelector(state => (state as AppState).searchCategory);

    const findComponent = (item: GitHubResult) => {
        switch (category) {
            case 'Users':
                return <User item={item} />
            case 'Repositories':
                return <Repository item={item} />
            default:
                return "Not Found";
        }
    }
    useEffect(() => {
        console.log("LOADING", isLoading);
        console.log("SSSDD", xxxx);
    });

    return (
        <div className="search-result">
            <h3>{JSON.stringify(isLoading)}</h3>
            <h3>{JSON.stringify(isError)}</h3>
            {isLoading ? <p>Loading</p> : ''}
            {isError ? <p>Error</p> : ''}
            <ul>
                {
                    items.map((item, index: number) => {
                        return (
                            <li key={index}>
                                {findComponent(item)}
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default SearchResult;