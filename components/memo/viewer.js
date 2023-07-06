import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity, } from "react-native";
import { editMemo } from "../../styles/editMemo";
import { MaterialIcons, MaterialCommunityIcons, Foundation, } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo } from "./../../redux/actions/todoListAction"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import moment from "moment";


export default function Editor({ id, getConcurrent }) {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    const memo = draftTodoDataStore.filter((memo) => { return memo?.id == id });


    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };


    return (
        <GestureRecognizer
            config={config}
            onSwipeLeft={(state) => getConcurrent("next")}
            onSwipeRight={(state) => getConcurrent("prev")}
            style={editMemo.editorViewContainer}
        >
            <TouchableOpacity activeOpacity={1} style={editMemo.editorContainer}>
                <ScrollView style={editMemo.titleContainer}>
                    <TouchableOpacity activeOpacity={1}>
                        <Text
                            placeholder="e.g. I'm starting to learn React Native"
                            style={editMemo.memoTitle}
                            ref={input => { this.textInput = input }}
                        >
                            {memo[0]?.text}
                        </Text>
                    </TouchableOpacity>

                </ScrollView>

                <View style={editMemo.scheduler}>
                    <View style={editMemo.schedulerChild1}>
                        <Text
                            style={editMemo.dateTimePicker}
                        >
                            {moment(new Date(memo[0]?.timeSchedule)).format('hh:mm a')}
                        </Text>
                    </View>

                    <View style={editMemo.schedulerChild2}>

                        <Text
                            style={editMemo.alermRepeat}
                        >
                            {memo[0]?.repeat}
                        </Text>
                    </View>
                </View>

                <ScrollView style={editMemo.memoDescription}>
                    <TouchableOpacity activeOpacity={1}>
                        <Text>
                            {memo[0]?.description}
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
                
            </TouchableOpacity>

        </GestureRecognizer>
    )
}
