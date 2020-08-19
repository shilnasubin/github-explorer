const searchResultReducer = (state = [], action: any) => {
    switch (action.type) {
        case 'SEARCHRESULT':
            return action.searchResult;
        default:
            return state;
    }
}

export default searchResultReducer;