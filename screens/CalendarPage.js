import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, Agenda, Calendar, LocaleConfig } from "react-native-calendars";


LocaleConfig.locales['ru'] = {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    today: 'Сегодня',
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
};

LocaleConfig.defaultLocale = 'ru';


// const backgroundImageCalendar = {url: '../assets/backgroundImageCalendar.png'};


export default function CalendarPage() {
    const [client, setClient] = useState([
        {
            name: 'Светлана',
            number: '+375292765283',
            service: 'Маникюр',
            key: '1',
        },
        {
            name: 'Ирина',
            number: '+375297663954',
            service: 'Педикюр',
            key: '2',
        },
    ]);
    
    
    const [selected, setSelected] = useState('');
  

    return (
        <View style={styles.container}>
            {/* <View style={styles.headerCalendar}>
                <TouchableOpacity>
                    <Text style={styles.textHeaderCalendar}>Лист</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textHeaderCalendar}>Месяц</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textHeaderCalendar}>День</Text>
                </TouchableOpacity>
            </View> */}
            {/* <Agenda
                style={styles.blockAgenda}
            />   */}

            <ImageBackground
                source={require('../assets/pexels-dids-1190830.png')}
                resizeMode='cover'
                style={styles.imageBackgroundCalendar}
                blurRadius={13}
            >
    
                <View style={styles.calendarContainer}>
                    <Calendar
                        firstDay={1}
                        enableSwipeMonths
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                        }}

                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#cf8496',
                            height: 320,
                            backgroundColor: 'rgba(255, 255, 255, 0.0)',
                        }}
                        
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: 'rgba(255, 255, 255, 0.0)',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#63103e',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#63103e',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#b6c1cd'
                        }}

                        // onMonthChange={() => {
                        //     return (

                        //     );
                        // }}
                        // onDayPress={() => {
                        //     return (

                        //     );
                        // }}
                    /> 

                    {/* <FlatList
                        data={client}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <Text style={styles.item}>{ item.name }</Text>
                                <Text style={styles.item}>{ item.number }</Text>
                                <Text style={styles.item}>{ item.service }</Text>
                            </TouchableOpacity>    
                        )}  
                    />   */}
                </View>     
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    // headerCalendar: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly',
    //     padding: 10,
    //     paddingLeft: 100,
    //     paddingRight: 100,
    // },

    // textHeaderCalendar: {
    //     color: '#63103e',

    //     fontFamily: 'Raleway-Regular',
    //     fontSize: 17,

    //     borderStyle: 'solid',
    //     borderWidth: 1,
    //     borderRadius: 11,

    //     paddingTop: 2,
    //     paddingBottom: 2,
    //     paddingLeft: 10,
    //     paddingRight: 10,
    // },

    // containerAgenda: {
    //     backgroundColor: '#FEE7EB',
 
    // },

    // blockAgenda: {
        
    // },

    // // calendar: {
    // //     marginBottom: 20,
    // //     height: 315,
    // // },

    item: {
        fontSize: 20,
        margin: 5,
        fontFamily: 'Raleway-SemiBoldItalic',
        color: '#63103e',
    },

    image: {
        // flex: 1,
        justifyContent: 'center',
    },

    imageBackgroundCalendar: {
        flex: 1,
    },
    
    calendarContainer: {
        flex: 1,
        // Другие стили для контейнера календаря
    },
    
});