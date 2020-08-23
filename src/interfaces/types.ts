
export interface GitHubResult {
    stargazers_count?: string;
    login?: string,
    avatar_url?: string,
    html_url?: string,
    followers_url: any [],
    name?: string,
    description?: string,
    owner?: {
        login :string,
        avatar_url: string
    }
}

export interface SearchAction {
    type: string,
    searchResult?: GitHubResult[]
}

export interface SearchInputAction {
    type: string,
    searchCategory?: string
    searchText?: string
}

export interface SearchResultState {
    items: GitHubResult[],
    isError: boolean,
}

export interface AppState {
    searchResult: SearchResultState,
    searchInput: SearchInputAction
}
