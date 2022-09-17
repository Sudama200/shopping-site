import { createAction } from "../userReducer/CreateAction";
import { CATEGORIES_TYPES } from "./category.types";



export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, categoriesMap);