import { combineReducers } from "redux";
import { draftTodoReducer } from "./todoListReducer";
import { draftTodoSelectedReducer } from "./todoSelectReducer";

const reducers = combineReducers({
    draftTodoReducer,
    draftTodoSelectedReducer
});

export default reducers;
