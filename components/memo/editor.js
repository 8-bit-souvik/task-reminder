import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, Button } from "react-native";
import { editMemo, dropDown } from "../../styles/editMemo";
import { MaterialIcons, MaterialCommunityIcons, Foundation, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector, useDispatch } from "react-redux";
import { addTodoMemo, removeTodoMemo, selectMemo } from "./../../redux/actions/todoListAction"



const data = [
    { label: 'Pop up only', value: 'Pop up only' },
    { label: 'Vibrate', value: 'Vibrate' },
    { label: 'Voice', value: 'Voice' },
    { label: 'Sound', value: 'Sound' },
    { label: 'Sound & Vibrate', value: 'Sound & Vibrate' },
];



export default function Editor({ id, action, cal, updateCalendar, targetDate }) {
    const dispatch = useDispatch();
    const draftTodoDataStore = useSelector(
        (store) => store.draftTodoReducer
    );

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }


    // const uid = id ? id : makeid(6);

    const [uid, setuid] = useState(id ? id : makeid(6))


    const [memo, setmemo] = useState(
        draftTodoDataStore.filter((memo) => { return memo?.id == uid })[0] ?
            draftTodoDataStore.filter((memo) => { return memo?.id == uid })[0]
            : {
                id: uid,
                text: "",
                description: "",
                timeSchedule: targetDate?.toString() || new Date().toString(),
                repeat: "Voice",
                lastUpdate: "",
                color: "default",
                pinned: false
            }
    )

    // useEffect(() => {
    //     console.log("memo: ", memo);
    // }, [memo])


    // const memo = draftTodoDataStore.filter((memo) => { return memo?.id == id });

    // console.log("id: ", id);
    // console.log("draftTodoDataStore: ", draftTodoDataStore);
    // console.log("memo: ", memo);


    const [isSetTimerDisplay, setTimerShow] = useState(false);
    const [isSetCalendarDisplay, setCalendarShow] = useState(cal);


    useEffect(() => {
        if (cal) {
            setCalendarShow(true)
        }else{
            setCalendarShow(false)
        }

        updateCalendar(memo?.timeSchedule);
    }, [cal]);




    const changeSelectedDate = (event, selectedDate) => {
        setTimerShow(false)
        setCalendarShow(false)
        updateCalendar(selectedDate.toString())
        const currentDate = selectedDate.toString() || new Date().toString();
        updateMemo("timeSchedule", currentDate);
        // console.log("timeSchedule", currentDate);
    };

    const displayDatepicker = () => {
        setTimerShow(true);
        // console.log("settimer: ", mytime);
    };



    const [isModeFocus, setIsModeFocus] = useState(false);


    const updateMemo = (key, value) => {
        setmemo((data) => {
            return ({ ...data, [key]: value, lastUpdate: new Date().toString() });
        })
    }

    const saveMemo = () => {
        dispatch(addTodoMemo([memo]));
        action("save", { id: uid })
    }


    return (
        <View style={editMemo.editorViewContainer}>


            <View style={editMemo.editorContainer}>
                <View style={editMemo.editMemoLabel}><MaterialIcons name="add-circle" size={16} /><Text>Title:</Text></View>
                <TextInput
                    placeholder="e.g. I'm starting to learn React Native"
                    style={editMemo.titleInput}
                    ref={input => { this.textInput = input }}
                    defaultValue={memo?.text}
                    onSubmitEditing={(value) => {
                        // setMemoHeading(value.nativeEvent.text);
                        // this.textInput.clear()
                    }}
                    onChange={(val) => {
                        // setmemo((value) => {
                        //     return ({ ...value, text: val.nativeEvent.text });
                        // })
                        updateMemo("text", val.nativeEvent.text)
                    }}
                />


                <View style={editMemo.scheduler}>
                    <View style={editMemo.schedulerChild1}>
                        <View style={editMemo.editMemoLabel}><MaterialCommunityIcons name="alarm" size={17} color="black" /><Text>Scheduled:</Text></View>

                        <Text
                            onPress={displayDatepicker}
                            style={editMemo.dateTimePicker}
                        >
                            {/* {mytime.toTimeString().slice(0, 5)} */}
                            {memo?.timeSchedule.slice(16, 21)}
                        </Text>
                    </View>

                    <View style={editMemo.schedulerChild2}>
                        <View style={editMemo.editMemoLabel}><MaterialCommunityIcons name="bell-ring-outline" size={17} color="black" /><Text>Mode:</Text></View>

                        {/* <Text
                            onPress={displayDatepicker}
                            style={editMemo.alermRepeat}
                        >
                            Repeat every 59 min
                        </Text> */}

                        <View style={dropDown.container}>
                            {/* {renderLabel()} */}
                            <Dropdown
                                style={[dropDown.dropdown, isModeFocus && { borderColor: 'blue' }]}
                                placeholderStyle={dropDown.placeholderStyle}
                                selectedTextStyle={dropDown.selectedTextStyle}
                                inputSearchStyle={dropDown.inputSearchStyle}
                                iconStyle={dropDown.iconStyle}
                                data={data}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isModeFocus ? 'Select mode' : '...'}
                                // searchPlaceholder="Search..."
                                value={memo?.repeat}
                                onFocus={() => setIsModeFocus(true)}
                                onBlur={() => setIsModeFocus(false)}
                                onChange={item => {
                                    setIsModeFocus(false);
                                    updateMemo("repeat", item.value)
                                }}
                                // renderLeftIcon={() => (
                                //     <AntDesign
                                //         style={dropDown.icon}
                                //         color={isModeFocus ? 'blue' : 'black'}
                                //         name="Safety"
                                //         size={20}
                                //     />
                                // )}
                                autoScroll={false}
                            />
                        </View>


                    </View>
                </View>


                <View style={editMemo.editMemoLabel}><MaterialIcons name="description" size={16} /><Text>description:</Text></View>
                <TextInput
                    editable
                    multiline
                    numberOfLines={15}
                    placeholder="e.g. I'm starting to learn React Native"
                    style={editMemo.descriptionInput}
                    ref={input => { this.textInput = input }}
                    defaultValue={memo?.description}
                    onSubmitEditing={(value) => {
                        // setMemoHeading(value.nativeEvent.text);
                        // this.textInput.clear()
                    }}
                    onChange={(val) => {
                        updateMemo("description", val.nativeEvent.text)
                    }}
                />





                <View style={editMemo.lastUpdate}>
                    <Text style={editMemo.lastUpdateKey}>Last updated:</Text>
                    <Text style={editMemo.lastUpdateValue}>{memo?.lastUpdate?.slice(0, 21)}</Text>
                </View>

                {isSetTimerDisplay && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date(memo?.timeSchedule)}
                        mode={"time"}
                        is24Hour={true}
                        display="spinner"
                        onChange={changeSelectedDate}
                    // onResponderGrant={() => {setTimerShow(false)}}
                    />
                )}


                {isSetCalendarDisplay && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date(memo?.timeSchedule)}
                        mode={"date"}
                        is24Hour={true}
                        display="default"
                        onChange={changeSelectedDate}
                        minimumDate={new Date()}
                    // onResponderGrant={() => {setTimerShow(false)}}
                    />
                )}

            </View>

            <Button title="Save Memo" color="orange" onPress={saveMemo} />

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

        </View>
    )
}
