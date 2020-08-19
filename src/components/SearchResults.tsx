import React from 'react';
import { useSelector } from 'react-redux';

const SearchResult = () => {
    const searchResults = useSelector(state => state as any[]);
    return (
        <div className="search-results">
            <ul>
                {
                    searchResults.map((item, index) => {
                        return <li key={index}>{(item as any).login}</li>
                    })
                }
            </ul>
            <h2>Search Results will come here</h2>
        </div>
    )
}

export default SearchResult;