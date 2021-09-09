import { combineReducers } from "redux";
import successReducer from "./successReducer";
import postReducer from './posts/reducer'

export default combineReducers({
    postReducer
})