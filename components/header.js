import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
header: {
    height: 80,
    paddingTop: 45,
    // paddingLeft: 20,
    backgroundColor: "orange",
},
headerText: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center"
}
})