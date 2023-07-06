import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, ToastAndroid } from "react-native";

import Header from "../components/memo/header";
import Editor from "../components/memo/editor";
import Viewer from "../components/memo/viewer";

import { editMemo } from "../styles/editMemo";

import { useSelector, useDispatch } from "react-redux";

export default function Memo({ route, navigation }) {
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    // console.log("route: ", route);
    const { id, newMemo, targetDate } = route.params;

    const [editorMode, setEditorMode] = useState(newMemo ? true : false);

    const [memoId, setmemoId] = useState(id)

    const action = (command, data) => {
        // console.log(command, data);
        switch (command) {
            case "edit": {
                return setEditorMode(true);
            }
            case "delete": {
                return
            }
            case "save": {
                data?.id ? setmemoId(data?.id) : null;
                return setEditorMode(false);
            }
            case "cancel": {
                if (newMemo) {
                    return navigation.goBack("Home");
                } else {
                    return setEditorMode(false);
                }
            }
            default:
                break;
        }
    }


    const [cal, setcal] = useState(false);
    const [date, setdate] = useState(false);

    const openCalender = (state) => {
        setcal(state);
    }

    const updateCalendar = (date) => {
        // console.log("date: ", date);
        openCalender(false);
        setdate(date);
    }

    const getConcurrent = (direction) => {
        const index = draftTodoDataStore.findIndex((item) => item.id === memoId);
        if (direction == "prev" && draftTodoDataStore[index - 1]?.id) {
            setmemoId(draftTodoDataStore[index - 1]?.id);
            setdate(draftTodoDataStore[index - 1]?.timeSchedule)
        } else if (direction == "next" && draftTodoDataStore[index + 1]?.id) {
            setmemoId(draftTodoDataStore[index + 1]?.id);
            setdate(draftTodoDataStore[index - 1]?.timeSchedule)
        } else {
            ToastAndroid.showWithGravityAndOffset(
                'No more data available',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        }

        
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss() }}
        >
            <View style={editMemo.container}>
                <Header navigation={navigation} editorMode={editorMode} action={action} id={memoId} openCalender={openCalender} date={date} />

                {
                    editorMode ?
                        <>
                            <Editor navigation={navigation} action={action} id={memoId} cal={cal} updateCalendar={updateCalendar} targetDate={targetDate} />
                        </>
                        :
                        <>
                            <Viewer navigation={navigation} action={action} id={memoId} getConcurrent={getConcurrent} />
                        </>
                }

            </View>
        </TouchableWithoutFeedback>
    );
}
