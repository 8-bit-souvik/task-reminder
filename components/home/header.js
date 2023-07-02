import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { home } from "./../../styles/home";
import { FontAwesome5, AntDesign, Foundation, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo, clearSelectMemo } from "./../../redux/actions/todoListAction"


export default function Header({ setDate, date, setOpenCalendar, openCalendar }) {

    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );
    const SelectedMemos = useSelector(
        (store) => store.draftTodoSelectedReducer
    );


    const refresh = (params) => {
        // console.log("SelectedMemos: ", SelectedMemos);
    }

    const deleteItems = (item) => {
        Alert.alert('Delete memo?', `Memo number: ${SelectedMemos} will be deleted`, [
            { text: "Cancel", onPress: () => { } },
            {
                text: "Delete", onPress: () => {
                    dispatch(removeTodoMemo(SelectedMemos));
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
                <Text><AntDesign name="caretleft" size={24} color="black" onPress={() => setDate("prev")} /></Text>
                <Text style={{ fontWeight: 600 }}>{day(date)}</Text>
                <Text><AntDesign name="caretright" size={24} color="black" onPress={() => setDate("next")} /></Text>
            </View>

            <View style={home.headerOptions}>
                {SelectedMemos != 0 ?
                    <>
                        <AntDesign name="pushpin" size={22} color="black" onPress={() => { pinItems() }} />
                        <Ionicons name="color-palette-sharp" size={22} color="black" />
                        <MaterialIcons name="delete" size={22} color="black" onPress={() => { deleteItems() }} />
                    </>
                    :
                    <>
                        <Text style={home.headerText} onPress={() => { setOpenCalendar((calendar) => { return !calendar }) }} >
                            {!openCalendar? <FontAwesome5 name="calendar-alt" size={22} color="black" />: <MaterialCommunityIcons name="calendar-remove" size={26} color="black" />}
                        </Text>
                        <Text style={home.headerText} onPress={() => { refresh() }}><Foundation name="refresh" size={24} color="black" /></Text>
                    </>
                }

            </View>


            {/* <Text style={home.headerText}>My Todos</Text> */}
        </View>
    )
}
