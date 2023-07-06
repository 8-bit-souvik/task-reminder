import { StyleSheet, Dimensions } from "react-native";
var { height, width, fontScale, scale } = Dimensions.get('window');


export const dropDown = StyleSheet.create({
    container: {
        backgroundColor: '#d4d3d2',
        marginTop: 10,
        // padding: 16,
    },
    dropdown: {
        width: 170,
        height: 45,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#d4d3d2',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})

export const editMemo = StyleSheet.create({
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
        justifyContent: 'flex-start',
        // marginTop: 40
        // height: height,
        backgroundColor: "#e8e8e8",
    },
    header: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "orange",
        paddingHorizontal: 20,
    },
    headerDate: {
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
        
    },
    headerText: {
        fontSize: 17,
        fontWeight: 600,
    },
    headerTextUnderLined: {
        fontSize: 17,
        fontWeight: 600,
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    viewHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 20,
        // paddingHorizontal: 35,
    },
    editHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: width,
        // backgroundColor: "orange",
    },
    editorViewContainer: {
        paddingHorizontal: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: height - 120,
        // backgroundColor: "#ffff"
    },
    lastUpdate: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    lastUpdateKey: {
        color: "#a1a09d",
    },
    lastUpdateValue: {
        color: "#a1a09d",
    },
    editorContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        // backgroundColor: "#ffff"
    },
    titleContainer: {
        maxHeight: 100,
        borderBottomWidth: 1,
        borderColor: "black",
    },
    titleInput: {
        height: 40,
        paddingHorizontal: 10,
        color: "black",
        borderColor: "grey",
        borderBottomWidth: 0.5,
    },
    descriptionInput: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        color: "black",
        display: "flex",
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    },
    scheduler: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10
    },
    schedulerChild1: {
        width: width / 2.14,
    },
    schedulerChild2: {
        // width: width / 2,
    },
    editMemoLabel: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 15
    },
    dateTimePicker: {
        marginTop: 10,
        width: 140,
        height: 45,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: "#d4d3d2",
        borderRadius: 5,
        paddingLeft: 25,
        paddingTop: 8,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    alermRepeat: {
        marginTop: 10,
        width: width / 2.2,
        height: 45,
        backgroundColor: "#d4d3d2",
        borderRadius: 5,
        paddingTop: 10,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    navigateMemo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        width: width - 20,
        marginHorizontal: 10


    },
    navButtonPrev: {
        width: "30%",
        height: 37,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 15,
        paddingLeft: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        borderWidth: 1,

    },
    navButtonPrevText: {
        fontSize: 18,
        fontWeight: 600,
        color: "white",
    },
    navButtonNext: {
        width: "30%",
        height: 37,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 15,
        paddingRight: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        borderWidth: 1,
    },
    navButtonNextText: {
        fontSize: 18,
        fontWeight: 600,
        color: "white",
    },
    memoTitle: {
        marginTop: 20,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: "#a1a09d",
        color: "black",
        fontWeight: 600,
    },
    memoDescription: {
        marginVertical: 10,
        paddingHorizontal: 10,
        // backgroundColor: "white",
        borderRadius: 5,
        height: height - 350,
    }
});

