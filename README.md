# GitHub Searcher

This is an app made with react to search for users and repositories using github api.  

- See a working  version of the application here [Github Searcher](https://shilnasubin.github.io/github-explorer)

## Running application

- Clone repository to the local folder.
- npm i & npm start.

## Remarks 

- This is my first attempt on using typescript in react.
- Used redux-thunk to make asynchronous action, which delegates api calls from components to action.
- Used single card on mobile screens instead of two.
- For user card couldn't find location information in the api.
- Couldn't find best approch of using router in the application, still i used just to change between search and result page.
- Used react-promise-tracker to show loader.