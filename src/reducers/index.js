import { combineReducers } from "redux";
import searchReducer from "./search";
import configReducer from "./config";


export default combineReducers({
    search: searchReducer,
    config: configReducer
})