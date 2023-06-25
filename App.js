import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Header from "./components/header";

export default function App() {




  const sampletodos = [
    { key: 1, text: "Learn React Native" },
    { key: 2, text: "Learn Material UI" },
    { key: 3, text: "Execute own Ideas" },
    { key: 4, text: "Build CMS" },
    { key: 5, text: "Connect App with CMS" }
  ]


  const [todos, settodos] = useState([
    { key: 1, text: "Learn React Native" },
    { key: 2, text: "Learn Material UI" },
    { key: 3, text: "Execute own Ideas" },
    { key: 4, text: "Build CMS" },
    { key: 5, text: "Connect App with CMS" }
  ])


  const deleteItem = (key) => {
    // console.log(key);
    const newTodoList = todos.filter((todo) => { return todo.key != key })
    // console.log(newTodoList);
    settodos(newTodoList);
  }


  const reloadItem = () => {
    settodos(sampletodos);
  }

  const newTodo = (value) => {
    let todoElements = [...todos, { key: todos.length+1, text: value }];
    settodos(todoElements);
  }

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.todoContainer}>
        <View style={styles.navigation}>
          <Text>todos</Text>
          <Text onPress={reloadItem}>Add Samples</Text>
        </View>

        <View>
          <View>
            {
              todos.map((item) => {
                return (
                  <View key={item?.key} style={styles.item}>
                    <Text>- {item?.text}</Text>
                    <Text style={styles.dismiss} onPress={() => deleteItem(item?.key)}>X</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.newMemo}>
        <Text>New memo:</Text>
        <TextInput style={styles.input} onSubmitEditing={(value) => {
          // console.log(value.nativeEvent.text);
          newTodo(value.nativeEvent.text);
          // value.nativeEvent.text = "";
        }} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40
  },
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
  newMemo: {
    marginHorizontal: 20,
    marginBottom: 20
  },
  input: {
    marginTop: 5,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5
  }
});
