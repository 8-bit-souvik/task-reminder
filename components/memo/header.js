import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { editMemo } from "../../styles/editMemo";
import { FontAwesome5, MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo, clearSelectMemo } from "./../../redux/actions/todoListAction"
import { addAlertPush, cancelAlertPush } from "./../../utils/alarmNotification/pushNotification";
import moment from "moment";


export default function Header({ navigation, editorMode, action, id, openCalender, date }) {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );
    const SelectedMemos = useSelector(
        (store) => store.draftTodoSelectedReducer
    );

    const deleteItems = (id) => {
        Alert.alert('Delete memo?', `Memo number: ${id} will be deleted`, [
            { text: "Cancel", onPress: () => { } },
            {
                text: "Delete", onPress: () => {
                    dispatch(removeTodoMemo(id));
                    cancelAlertPush({ id: id });
                    dispatch(clearSelectMemo(""));
                    navigation.goBack("Home");
                }
            }
        ])
    }

    const cancelEditing = (id) => {
        Alert.alert('Cancel editing?', ` `, [
            { text: "No, wait", onPress: () => { } },
            {
                text: "Sure", onPress: () => {
                    action("cancel")
                }
            }
        ])
    }

    const day = (date) => {
        if (!date) {
            return "Today"
        }
        const today = parseInt(`${new Date(date).getFullYear()}${new Date(date).getMonth()}${new Date(date).getDate()}`) == parseInt(`${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}`);

        if (today) {
            return "Today"
        } else {
            return `${moment(new Date(date)).format("ddd[,] Do MMM")}`
        }
    }

    return (
        <View style={editMemo.header}>

            {editorMode ?
                <>
                    <TouchableOpacity activeOpacity={0.5} style={editMemo.headerDate} onPress={() => { openCalender(true) }}><Text style={editMemo.headerTextUnderLined}>{day(date)}</Text><Entypo name="chevron-small-down" size={27} color="black" /></TouchableOpacity>
                    <View style={editMemo.viewHeader}>
                        <TouchableOpacity  style={editMemo.button} onPress={() => { cancelEditing() }}><AntDesign name="close" size={24} color="black" /></TouchableOpacity>
                    </View>
                </>
                :
                <>
                    <TouchableOpacity activeOpacity={1} style={editMemo.headerDate}><Text style={editMemo.headerText}>{day(date)}</Text></TouchableOpacity>
                    <View style={editMemo.viewHeader}>
                        <TouchableOpacity  style={editMemo.button} onPress={() => { deleteItems(id) }}><MaterialIcons name="delete" size={24} color="black" /></TouchableOpacity>
                        <TouchableOpacity  style={editMemo.button} onPress={() => { action("edit") }}><FontAwesome5 name="edit" size={21} color="black" /></TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}
