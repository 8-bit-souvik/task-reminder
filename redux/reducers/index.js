import { combineReducers } from "redux";
import { draftTodoReducer } from "./todoListReducer";

const reducers = combineReducers({
    draftTodoReducer
});

export default reducers;
