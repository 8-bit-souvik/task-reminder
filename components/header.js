import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo } from "./../redux/actions/todoListAction"


export default function Header() {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 75,
        paddingTop: 35,
        // paddingLeft: 20,
        backgroundColor: "orange",
    },
    headerText: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: "center"
    }
})