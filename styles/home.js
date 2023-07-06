import { StyleSheet, Dimensions } from "react-native";
var { height, width, fontScale, scale } = Dimensions.get('window');

export const home = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 40
    },
    header: {
        height: 50,
        // paddingTop: 15,
        // paddingLeft: 20,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    headerDate: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    headerOptions: {
        paddingLeft: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: "center"
    },
    todoContainer: {
        flex: 1,
        backgroundColor: '#dedede',
        alignItems: 'center',
        // backgroundColor: "#ffff",
    },
    item: {
        borderRadius: 5,
        width: 350,
        marginTop: 10,
        padding: 5,
        paddingVertical: 10,
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#b5b5b5"
    },
    timeToGo: {
        marginTop: 2,
        marginLeft: 16,
        fontSize: 13,
        color: "grey",
    },
    selectedItem: {
        borderRadius: 5,
        width: 350,
        marginTop: 10,
        padding: 5,
        paddingVertical: 10,
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: "blue"
    },
    noItem: {
        marginTop: 20,
        marginHorizontal: 25,
    },
    noItemText: {
        textAlign: "center",
        fontSize: 20,
        color: "#8f8f8f"
    },
    dismiss: {
        // backgroundColor: "#e0638d",
        width: 20,
        borderRadius: 5,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: 1
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
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: "#dedede"
    },
    newMemoHeading: {
        color: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 5
    },
    input: {
        marginTop: 5,
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "black",
        color: "black"
    }
});

