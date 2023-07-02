import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo } from "./../../redux/actions/todoListAction"
import { MaterialIcons } from '@expo/vector-icons';
import { home } from "./../../styles/home";


export default function Header({ navigation, showDate }) {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    return (
        <View style={home.newMemo}>
            <Button title="Add New Task" color="orange" onPress={() => { navigation.push('Memo', { id: null, newMemo: true, targetDate: showDate.toString() }) }} />
        </View>
    )
}

