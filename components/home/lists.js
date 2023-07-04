import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, Alert, TouchableOpacity, } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo } from "./../../redux/actions/todoListAction"
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
const humanize = require('tiny-human-time');
import { home } from "./../../styles/home";

export default function Lists({ navigation, showDate }) {
    // const [day, setday] = useState();

    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );
    const SelectedMemos = useSelector(
        (store) => store.draftTodoSelectedReducer
    );

    const expandItem = (item) => {
        console.log(item);
    }

    const select = (item) => {
        dispatch(selectMemo(item?.id));
    }

    const ttg = (time) => {
        const now = new Date();
        const later = new Date(time);

        if (later.getTime() > now.getTime()) {
            return `${humanize(now, later)} to go`;
        } else {
            return `${humanize(now, later)} ago`;
        }
    }

    const todaysMemo = (reqDate) => {
        return draftTodoDataStore?.filter((item) => {
            const day = { date: new Date(reqDate).getDate(), month: new Date(reqDate).getDate(), year: new Date(reqDate).getFullYear() };
            return (
                day?.date === new Date(item.timeSchedule).getDate() &&
                day?.month === new Date(item.timeSchedule).getDate() &&
                day?.year === new Date(item.timeSchedule).getFullYear()
            )
        })
    };

    const todaysMemoList = todaysMemo(showDate);

    // console.log(todaysMemo());


    return (
        <SafeAreaView style={home.todoContainer}>
            <View style={home.navigation}>
                {/* <Text>todos</Text> */}
                {/* <Text onPress={reloadItem}>Add Samples</Text> */}
            </View>

            <View>
                <View>
                    {todaysMemoList?.length == 0
                        ?
                        <View style={home.noItem}>
                            <Text style={home.noItemText}>+ Add new memo</Text>
                        </View>

                        :
                        <ScrollView style={{ marginBottom: 25 }}>
                            {todaysMemoList.map((item) => {
                                return (
                                    <TouchableOpacity key={item?.id} style={SelectedMemos.includes(item?.id) ? home.selectedItem : home.item}
                                        onLongPress={() => { select(item) }} onPress={() => { SelectedMemos != 0 ? select(item) : navigation.push('Memo', { id: item?.id }) }}
                                    >
                                        <View>
                                            <Text><Entypo name='arrow-bold-right' size={16} color={"#e0638d"} /> {item?.text} </Text>
                                            <Text style={home.timeToGo}> {ttg(item?.timeSchedule)} </Text>
                                        </View>



                                        {item?.pinned ? <Entypo name="pin" size={24} color="black" style={{ position: "absolute", top: -10, right: 0 }} /> : <></>}

                                        <Text style={home.dismiss} onPress={() => expandItem(item)}>
                                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                        </Text>

                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>

                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

