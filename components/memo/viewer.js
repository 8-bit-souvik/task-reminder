import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity, } from "react-native";
import { editMemo } from "../../styles/editMemo";
import { MaterialIcons, MaterialCommunityIcons, Foundation, } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo } from "./../../redux/actions/todoListAction"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';


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
            // onSwipe={(direction, state) => {
            //     onSwipe(direction, state);
            //     console.log(direction);
            //     console.log(state);
            // }}
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
                            {memo[0]?.timeSchedule?.slice(16, 21)}
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
                        <Text
                        // editable={false}
                        // multiline
                        // numberOfLines={25}
                        // placeholder="e.g. I'm starting to learn React Native"

                        >
                            {memo[0]?.description}
                        </Text>
                    </TouchableOpacity>


                </ScrollView>





            </TouchableOpacity>

            {/* <View style={editMemo.navigateMemo}>
                <View style={editMemo.navButtonPrev}>
                    <Foundation name="previous" size={24} color="white" />
                    <Text style={editMemo.navButtonPrevText}>Prev</Text>
                </View>

                <View style={editMemo.navButtonNext}>
                    <Text style={editMemo.navButtonNextText}>Next</Text>
                    <Foundation name="next" size={24} color="white" />

                </View>
            </View> */}

        </GestureRecognizer>
    )
}
