import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import './SearchResult.scss';
import User from '../components/User';
import Repository from '../components/Repository';
import { AppState, GitHubResult } from '../interfaces/types';
import { usePromiseTracker } from 'react-promise-tracker';
import { Loader } from '../components/Loader';

const SearchResult: FunctionComponent = () => {
    const items = useSelector(state => (state as AppState).searchResult.items);
    const category = useSelector(state => (state as AppState).searchInput.searchCategory);
    const isError = useSelector(state => (state as AppState).searchResult.isError);

    const { promiseInProgress } = usePromiseTracker();

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

    return (
        <div className="search-result">
            {
                (isError === true) ? <div className="error">Error occured for fetching data</div> :
                    (promiseInProgress === true) ? <Loader /> :
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
            }

        </div>
    )
}

export default SearchResult;