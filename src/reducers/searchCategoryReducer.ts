import { SEARCH_CATEGORY } from "../actions/actionType";
import { CATEGORY_LIST } from "../constants/constants";

const intialCategory = CATEGORY_LIST.length > 0 ? CATEGORY_LIST[0] : '';
const SearchCategoryReducer = (state = intialCategory, action: any) => {
    switch (action.type) {
        case SEARCH_CATEGORY:
            return action.searchCategory;
        default:
            return state;
    }
}

export default SearchCategoryReducer;