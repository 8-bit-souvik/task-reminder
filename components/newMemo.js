import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo } from "./../redux/actions/todoListAction"


export default function Header() {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );


    const newTodo = (value) => {
        dispatch(addTodoMemo({ key: draftTodoDataStore.length + 1, text: value }));
    }

    return (
        <View style={styles.newMemo}>
            <Text style={styles.newMemoHeading}>New memo:</Text>
            <TextInput
                placeholder="e.g. I'm starting to learn React Native"
                style={styles.input}
                ref={input => { this.textInput = input }}
                onSubmitEditing={(value) => {
                    newTodo(value.nativeEvent.text);
                    this.textInput.clear()
                }} />
        </View>
    )
}


const styles = StyleSheet.create({
    newMemo: {
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: "white"
    },
    newMemoHeading: {
        color: "black"
    },
    input: {
        marginTop: 5,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        color: "black"
    }
})