
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

export interface SearchCategoryAction {
    type: string,
    searchCategory: string
}

export interface SearchResultState {
    items: GitHubResult[],
    isLoading: boolean,
    isError: boolean
}

export interface AppState {
    searchCategory: string,
    searchResult: SearchResultState
}
