import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo } from "./../../redux/actions/todoListAction"
import parseCalendarDate from "./parsecalendarDate";

export default function dates() {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    // console.log("draftTodoDataStore: ", draftTodoDataStore);

    const dates = draftTodoDataStore.map((item) => {
        return parseCalendarDate(item.timeSchedule)
    })

    // console.log("dates: ", dates);

    const uniqueDates = [...new Set(dates)];

    const data = Object.assign({}, ...uniqueDates.map((date) => {
        return {[date]: {marked: true}}
    }))


    // console.log("data: ", data);

    return data;
}