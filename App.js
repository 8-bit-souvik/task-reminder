import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Header from "./components/header";
import Lists from "./components/lists";
import NewMemo from "./components/newMemo";
import { Provider } from 'react-redux';
import { store } from './redux/store';



export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Lists />
        <NewMemo />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40
  }
});
