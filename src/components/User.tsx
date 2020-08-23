import React, { FunctionComponent } from 'react';
import { GitHubResult } from '../interfaces/types';
import './User.scss';

interface UserProps {
    item: GitHubResult
}

const User: FunctionComponent<UserProps> = ({ item }: any) => {
    return (
        <div className="search-result-details user">
            <div className="account">
                <img src={item.avatar_url} alt="logo" />
                <h3 className="name">{item.login}</h3>
                <div className="follow-count">
                    <p>Followers: {item.followers_url?.length}</p>
                </div>
            </div>
            <div className="bio">
                <a href={item.html_url} target="_blank" className="detailView" rel="noopener noreferrer">{item.html_url}</a>
            </div>
        </div>
    )
}

export default User;
