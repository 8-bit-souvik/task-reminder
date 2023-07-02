import { todoListActions } from "../constants/todoListTypes";

const draftTodoState = [];

export const draftTodoReducer = (state = draftTodoState, { type, payload }) => {
  switch (type) {
    case todoListActions.ADD_MEMO: {

      // console.log("payload:::: ", payload);
      const payloadArray = Array.isArray(payload);

      if (payloadArray) {
        // for (let i = 0; i < payload.length; i++) {
        //   const index = state.findIndex(m => { return m.id === payload[i].id });
        //   if (index === -1) {
        //     return [...state, payload[i]];
        //   } else {
        //     const newData = state.map((item, j) => {
        //       if (index === j) {
        //         return payload[i];
        //       } else {
        //         return item;
        //       }
        //     })
        //     console.log(newData);
        //     return newData;
        //   }
        // }

        // const filteredMemos = state.filter((stateItem) => { return payload.filter((payLoadItem) => {return stateItem?.id != payLoadItem?.id})} );
        const filteredMemos = (state.filter(n => !payload.filter(s => n.id == s.id)[0]))

        const newList = [...filteredMemos, ...payload];

        return newList.sort(function (x, y) {
          return new Date(x.timeSchedule).getTime() - new Date(y.timeSchedule).getTime();
        })
      } else {
        return state;
      }

    }
    case todoListActions.DELETE_MEMO: {

      var ModifiedTodoList;

      if (Array.isArray(payload)) {
        ModifiedTodoList = state.filter(n => !payload.includes(n.id))
      } else {
        ModifiedTodoList = state.filter((todo) => {
          return todo.id != payload;
        });

      }

      // const newTodoList = ModifiedTodoList.map((todo, index) => {
      //   return { id: index + 1, text: todo.text };
      // });

      return ModifiedTodoList;
    }
    default:
      return state;
  }
};
