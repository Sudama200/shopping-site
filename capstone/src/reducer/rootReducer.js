import { combineReducers } from "redux";
import { UserReducer } from "./userReducer/UserReducer";



export const rootReducer = combineReducers({
    user: UserReducer
})

