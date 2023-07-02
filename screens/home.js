import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import Header from "./../components/home/header";
import Lists from "./../components/home/lists";
import NewMemo from "./../components/home/newMemo";

import { home } from "./../styles/home";

import markedDatesObject from "./../utils/dateTime/getScheduledDates";
import parseCalendarDate from "./../utils/dateTime/parsecalendarDate";




export default function Home({ navigation }) {
  const [showDate, setShowDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(`${showDate.getFullYear()}-${showDate.getMonth()}-${showDate.getDate()}`);
  const [openCalendar, setOpenCalendar] = useState(false)

  const setDate = (date) => {
    if (date == "prev") {
       setShowDate(new Date(showDate.getTime() - (24 * 60 * 60 * 1000)));
       setSelectedDate(parseCalendarDate(new Date(showDate.getTime() - (24 * 60 * 60 * 1000))));
    } else if (date == "next") {
      setShowDate(new Date(showDate.getTime() + (24 * 60 * 60 * 1000)));
      setSelectedDate(parseCalendarDate(new Date(showDate.getTime() + (24 * 60 * 60 * 1000))));
    } else {
      setShowDate(showDate);
    }
  }

  const onDayPress = useCallback((day) => {
    setSelectedDate(day.dateString);
    setShowDate(new Date(day.timestamp));
    // setOpenCalendar(false);
    // console.log(day);
  }, [selectedDate]);

  var markedDates = markedDatesObject();

  markedDates[selectedDate] = {...markedDates[selectedDate], selected: true, selectedColor: 'orange' }

  // console.log(markedDates);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={home.container}>
        <Header navigation={navigation} setDate={setDate} date={showDate} setOpenCalendar={setOpenCalendar} openCalendar={openCalendar} />
        {openCalendar && <Calendar
          markedDates={markedDates}
          onDayPress={onDayPress}
        // onDayLongPress={onDayLongPress}
        />}
        <Lists navigation={navigation} showDate={showDate} />
        <NewMemo navigation={navigation} showDate={showDate} />
      </View>
    </TouchableWithoutFeedback>
  );
}
