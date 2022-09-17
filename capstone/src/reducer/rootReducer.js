import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesToRedux/category.reducer";
import { UserReducer } from "./userReducer/UserReducer";



export const rootReducer = combineReducers({
    user: UserReducer,
    categories: categoriesReducer
})

