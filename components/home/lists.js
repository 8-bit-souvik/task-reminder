import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, Alert, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo } from "./../../redux/actions/todoListAction"
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
const humanize = require('tiny-human-time');
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { home } from "./../../styles/home";

export default function Lists({ navigation, showDate, setDate }) {
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

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                console.log(gestureName);
                break;
            case SWIPE_DOWN:
                console.log(gestureName);
                break;
            case SWIPE_LEFT:
                console.log(gestureName);
                break;
            case SWIPE_RIGHT:
                console.log(gestureName);
                break;
        }
    }


    return (
        <GestureRecognizer
            config={config}
            // onSwipe={(direction, state) => {
            //     onSwipe(direction, state);
            //     console.log(direction);
            //     console.log(state);
            // }}
            onSwipeLeft={(state) => setDate("next")}
            onSwipeRight={(state) => setDate("prev")}
            style={home.todoContainer}
        >
            <TouchableOpacity activeOpacity={1}>
                <View style={home.navigation}>
                    {/* <Text>todos</Text> */}
                    {/* <Text onPress={reloadItem}>Add Samples</Text> */}
                </View>

                <View>
                    <View>
                        {todaysMemoList?.length == 0
                            ?
                            <ScrollView style={home.noItem}>
                                <Text style={home.noItemText}>+ Add new memo</Text>
                            </ScrollView>

                            :
                            <ScrollView style={{ marginBottom: 25 }} horizontal={false}>
                                {todaysMemoList.map((item) => {
                                    return (
                                        <TouchableOpacity activeOpacity={0.7} key={item?.id} style={SelectedMemos.includes(item?.id) ? home.selectedItem : home.item}
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
            </TouchableOpacity>

        </GestureRecognizer>
    )
}


