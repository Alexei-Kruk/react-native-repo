import { Alert, Pressable, StyleSheet, View, Text, ImageBackground, Modal } from "react-native";

import {
    Agenda,
    AgendaEntry,
    AgendaSchedule,
    DateData
  } from "react-native-calendars";
import { useState } from "react";
import events from "../assets/data/events.json";
import event from "../assets/data/event.json";
import Event from "../components/modalScreens/EventScreen";


export default function CalendarPageNew() {
    
    const [items, setItems] = useState({});
    
    
    const renderItem = (reservation) => {
        return (
            <Pressable
                style={[styles.item, { height: reservation.height }]}
                onPress={() => console.log(event.name)}
            >
                <Text style={styles.textItem}>{reservation.name}</Text>
                <Text style={styles.textItem}>{reservation.service}</Text>
                <Text style={styles.textItem}>{reservation.time}</Text>
            </Pressable>
        );
    };

    return (
        <ImageBackground
            source={require('../assets/backgroundImageCalendar.png')}
            style={styles.backgroundImage}
            blurRadius={15}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <Agenda
                    items={events}
                    renderItem={renderItem}
                    firstDay={1}
                    
                    theme={{
                        agendaDayTextColor: '#63103e',
                        agendaDayNumColor: '#63103e',
                        agendaTodayColor: '#63103e',
                        agendaKnobColor: '#63103e',
                        selectedDayBackgroundColor: '#63103e', 
                        dotColor: '#63103e',
                        agendaDayNumFontFamily: 'Raleway-SemiBoldItalic',
                    }}
                />    
            </View>
        </ImageBackground>
        
        
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },

    agenda: {
        // flex: 1,
        // width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },

    backgroundImage: {
        flex: 1,
    },
    
    item: {
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 12,
        padding: 10,
        marginRight: 15,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },

    textItem: {
        fontFamily: 'Raleway-SemiBoldItalic',
        fontSize: 16,

        marginLeft: 6,
        
    }
})