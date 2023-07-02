import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";

import Header from "../components/memo/header";
import Editor from "../components/memo/editor";
import Viewer from "../components/memo/viewer";

import { editMemo } from "../styles/editMemo";

export default function Memo({ route, navigation }) {
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
                            <Viewer navigation={navigation} action={action} id={memoId} />
                        </>
                }

            </View>
        </TouchableWithoutFeedback>
    );
}
