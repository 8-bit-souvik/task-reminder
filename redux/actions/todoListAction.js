import { todoListActions, todoSelectActions } from "../constants/todoListTypes";

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

const selectMemo = (memo) => {
    return (dispatch) => {
        dispatch({
            type: todoSelectActions.SELECT,
            payload: memo
        });
    };
};


const clearSelectMemo = (memo) => {
    return (dispatch) => {
        dispatch({
            type: todoSelectActions.CLEAR,
            payload: memo
        });
    };
};


export { addTodoMemo, removeTodoMemo, selectMemo, clearSelectMemo };
