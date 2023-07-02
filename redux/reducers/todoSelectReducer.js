import { todoSelectActions } from "../constants/todoListTypes";

const draftTodoSelected = [];

export const draftTodoSelectedReducer = (state = draftTodoSelected, { type, payload }) => {
    switch (type) {
        case todoSelectActions.SELECT: {

            if (!state.includes(payload)) {
                return [...state, payload];

            } else {

                return state.filter((todoKey) => {
                    return todoKey != payload;
                });
            }

        }
        case todoSelectActions.CLEAR:{
            return []
        }
        default:
            return state;
    }
};
