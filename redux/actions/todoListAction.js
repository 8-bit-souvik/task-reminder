import { todoListActions } from "../constants/todoListTypes";

const addTodoMemo = (memo) => {
    return (dispatch) => {
        dispatch({
            type: todoListActions.ADD_MEMO,
            payload: memo,
        });
    };
};

const removeTodoMemo = (memo) => {
    return (dispatch) => {
        dispatch({
            type: todoListActions.DELETE_MEMO,
            payload: memo
        });
    };
};

export { addTodoMemo, removeTodoMemo };
