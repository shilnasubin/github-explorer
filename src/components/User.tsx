import React, { FunctionComponent } from 'react';
import { GitHubResult } from '../interfaces/types';

interface UserProps {
    item: GitHubResult
}

const User: FunctionComponent<UserProps> = ({ item }: any) => {
    return (
        <div className="search-result-details">
            <div className="account">
                <img src={item.avatar_url} alt="logo" />
                <h3 className="name">{item.login}</h3>
                <div className="follow-count">
                    <p>Followers: {item.followers_url?.length}</p>
                </div>
            </div>
            <div className="bio"><a href={item.html_url} target="_blank" className="detailView">{item.html_url}</a></div>
        </div>
    )
}

export default User;
