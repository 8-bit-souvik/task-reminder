import produce from "immer";
import { todoListActions } from "../constants/todoListTypes";

const draftTodoState = []



export const draftTodoReducer = (state = draftTodoState, { type, payload }) => {
  switch (type) {
    case todoListActions.ADD_MEMO: {
      return [...state, payload];
    }
    case todoListActions.DELETE_MEMO: {
      const newTodoList = state.filter((todo) => { return todo.key != payload.key });
      return newTodoList;
    }
    default:
      return state;
  }
};
