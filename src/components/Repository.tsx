import React, { FunctionComponent } from 'react';
import { GitHubResult } from '../interfaces/types';

interface RepositoryProp {
    item: GitHubResult
}

const Repository: FunctionComponent<RepositoryProp> = ({ item }) => {
    return (
        <div className="search-result-details repository">

            <div className="account">
                <img src="images/github-logo.png" alt="logo" />
                <h3 className="name">{item.name}</h3>
                <p className="description">{item.description}</p>
            </div>
            <div className="bio">
                <img src={item.owner?.avatar_url} alt="" />
                <h4 className="login">{item.owner?.login}</h4>
            </div>

        </div>
    )

}

export default Repository;