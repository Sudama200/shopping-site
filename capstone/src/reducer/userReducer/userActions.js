
import { createAction } from "./CreateAction";
import { USER_ACTION_TYPES } from "./userActionTypes";

export const setCurrentUser = (user) => 
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
