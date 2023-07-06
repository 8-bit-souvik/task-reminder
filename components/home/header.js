import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ToastAndroid, TouchableOpacity, TouchableHighlight } from "react-native";
import { home } from "./../../styles/home";
import { FontAwesome5, AntDesign, Foundation, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo, clearSelectMemo } from "./../../redux/actions/todoListAction"
import { addAlertPush, cancelAlertPush } from "./../../utils/alarmNotification/pushNotification";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header({ setDate, date, setOpenCalendar, openCalendar }) {

    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );
    const SelectedMemos = useSelector(
        (store) => store.draftTodoSelectedReducer
    );


    const refresh = async (params) => {
        // console.log("SelectedMemos: ", SelectedMemos);
        const data = await AsyncStorage.getItem("schedules");
        // console.log(JSON.parse(data));
        dispatch(addTodoMemo(JSON.parse(data)));
        ToastAndroid.showWithGravityAndOffset(
            'Refreshing...',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }

    const deleteItems = (item) => {
        Alert.alert('Delete memo?', `Memo number: ${SelectedMemos} will be deleted`, [
            { text: "Cancel", onPress: () => { } },
            {
                text: "Delete", onPress: () => {
                    dispatch(removeTodoMemo(SelectedMemos));
                    cancelAlertPush({ id: SelectedMemos });
                    dispatch(clearSelectMemo(""));
                }
            }
        ])

    }

    const pinItems = () => {

        const filterSelected = draftTodoDataStore.filter((item) => { return SelectedMemos.includes(item.id) })

        const pinModified = filterSelected.map((item) => {
            return { ...item, pinned: !item?.pinned }
        });

        // console.log(pinModified);
        dispatch(addTodoMemo(pinModified));
        // console.log(pinModified);

        dispatch(clearSelectMemo(""));
    }

    const day = (date) => {
        if (!date) {
            return "Today"
        }
        const today = parseInt(`${new Date(date).getFullYear()}${new Date(date).getMonth()}${new Date(date).getDate()}`) == parseInt(`${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}`);

        // console.log("today ", today);
        if (today) {
            return "Today"
        } else {
            return `${date?.toString()?.slice(0, 3)},${date.toString()?.slice(3, 10)}`
        }
    }

    return (
        <View style={home.header}>
            <View style={home.headerDate}>
                <TouchableOpacity style={home.button} onPress={() => setDate("prev")}><AntDesign name="caretleft" size={24} color="black"  /></TouchableOpacity>
                <Text style={{ fontWeight: 600, width: 90, textAlign: "center" }}>{day(date)}</Text>
                <TouchableOpacity style={home.button} onPress={() => setDate("next")}><AntDesign name="caretright" size={24} color="black"  /></TouchableOpacity>
            </View>

            <View style={home.headerOptions}>
                {SelectedMemos != 0 ?
                    <>
                      <TouchableOpacity style={home.button} onPress={() => { pinItems() }} ><AntDesign name="pushpin" size={22} color="black"/></TouchableOpacity>  
                      <TouchableOpacity style={home.button}  ><Ionicons name="color-palette-sharp" size={22} color="black" /></TouchableOpacity>  
                      <TouchableOpacity style={home.button} onPress={() => { deleteItems() }} ><MaterialIcons name="delete" size={22} color="black"  /></TouchableOpacity>  
                    </>
                    :
                    <>
                        <TouchableOpacity style={home.button} onPress={() => { setOpenCalendar((calendar) => { return !calendar }) }} >
                            {!openCalendar ? <FontAwesome5 name="calendar-alt" size={22} color="black" /> : <MaterialCommunityIcons name="calendar-remove" size={26} color="black" />}
                        </TouchableOpacity>
                        <TouchableOpacity style={home.button} onPress={() => { refresh() }}><Foundation name="refresh" size={24} color="black" /></TouchableOpacity>
                    </>
                }

            </View>


            {/* <Text style={home.headerText}>My Todos</Text> */}
        </View>
    )
}
