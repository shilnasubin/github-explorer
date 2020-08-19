const searchAction = (searchResult: any[]) => {
    return {
        type: "SEARCHRESULT",
        searchResult
    }
}

export default searchAction;