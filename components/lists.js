import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo } from "./../redux/actions/todoListAction"


export default function Lists() {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    const deleteItem = (item) => {
        dispatch(removeTodoMemo(item));
    }


    return (
        <SafeAreaView style={styles.todoContainer}>
            <View style={styles.navigation}>
                {/* <Text>todos</Text> */}
                {/* <Text onPress={reloadItem}>Add Samples</Text> */}
            </View>

            <View>
                <View>
                    {draftTodoDataStore?.length == 0
                        ?
                        <View style={styles.noItem}>
                            <Text style={styles.noItemText}>+ Add new memo</Text>
                        </View>

                        :
                        draftTodoDataStore.map((item) => {
                            return (
                                <View key={item?.key} style={styles.item}>
                                    <Text>• {item?.text}</Text>
                                    <Text style={styles.dismiss} onPress={() => deleteItem(item)}>X</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    todoContainer: {
        flex: 1,
        backgroundColor: '#dedede',
        alignItems: 'center',
    },
    item: {
        borderRadius: 5,
        width: 350,
        marginTop: 10,
        padding: 5,
        backgroundColor: "pink",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row'
    },
    noItem: {
        marginTop: 20
    },
    noItemText: {
        fontSize: 17,
        color: "#8f8f8f"
    },
    dismiss: {
        backgroundColor: "#e0638d",
        width: 20,
        borderRadius: 5,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        // fontFamily: "Avenir"
    },
    navigation: {
        marginTop: 10,
        width: 350,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
});
