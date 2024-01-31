import {
    Alert,
    Pressable,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Modal,
    Button,
    TouchableOpacity,
} from "react-native";

import {
    Agenda,
    AgendaEntry,
    AgendaSchedule,
    DateData,
} from "react-native-calendars";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import events from "../assets/data/events.json";
import event from "../assets/data/event.json";


export default function CalendarPageNew() {
    const [modalWindowEvent, setModalWindowEvent] = useState(false);

    const renderItem = (reservation) => {
        return (
            <View style={modalWindowEvent ? styles.blurContent : null}>
                <View>
                    <Modal
                        visible={modalWindowEvent}
                        items={event}
                        animationType="slide"
                        transparent={true}
                        renderItem={event}
                        onRequestClose={() => setModalWindowEvent(false)}
                        presentationStyle="overFullScreen"
                    >
                        <View style={styles.blockItemsModalWindowEvent}>
                            <View style={styles.titleItem}>
                                <Text style={styles.titleModalWindowEvent}>
                                    Подробнее о клиенте
                                </Text>
                            </View>

                            <View>
                                <View style={styles.backgroundModalWindowEvent}>
                                    <Text style={styles.textModalWindowEvent}>
                                        {event.name}
                                    </Text>
                                    <Text style={styles.textModalWindowEvent}>
                                        {event.number}
                                    </Text>
                                    <Text style={styles.textModalWindowEvent}>
                                        {event.service}
                                    </Text>
                                    <Text style={styles.textModalWindowEvent}>
                                        {event.comment}
                                    </Text>
                                    <Text style={styles.textModalWindowEvent}>
                                        {event.date}
                                    </Text>
                                    <Text style={styles.textModalWindowEvent}>
                                        {event.time}
                                    </Text>
                                </View>

                                <View style={styles.buttonItem}>
                                    <AntDesign
                                        name="edit"
                                        size={30}
                                        color="#63103e"
                                        style={styles.buttonModalWindowEvent}
                                    />
                                    <AntDesign
                                        name="delete"
                                        size={30}
                                        color="#63103e"
                                        style={styles.buttonModalWindowEvent}
                                    />
                                    <AntDesign
                                        name="closecircleo"
                                        size={30}
                                        color="#63103e"
                                        style={styles.buttonModalWindowEvent}
                                        onPress={() =>
                                            setModalWindowEvent(false)
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                <Pressable
                    style={[styles.item, { height: reservation.height }]}
                    onPress={() => setModalWindowEvent(true)}
                >
                    <Text style={styles.textItem}>{reservation.name}</Text>
                    <Text style={styles.textItem}>{reservation.service}</Text>
                    <Text style={styles.textItem}>{reservation.time}</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <View style={styles.containerAgenda}>
            <Agenda
                items={events}
                renderItem={renderItem}
                firstDay={1}
                theme={{
                    agendaDayTextColor: "#63103e",
                    agendaDayNumColor: "#63103e",
                    agendaTodayColor: "#63103e",
                    agendaKnobColor: "#63103e",
                    selectedDayBackgroundColor: "#63103e",
                    dotColor: "#63103e",
                    agendaDayNumFontFamily: "Raleway-SemiBoldItalic",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    blurContent: {
        backgroundColor: "transparent",
        filter: "blur(10)",
        // flex: 1,
    },

    blockItemsModalWindowEvent: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: "50%",
        backgroundColor: "#FEE7EB",
        borderRadius: 20,
        paddingTop: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    titleItem: {
        width: "100%",

        borderColor: "#cf8496",
        borderBottomWidth: 1,
    },

    titleModalWindowEvent: {
        marginBottom: 20,

        textAlign: "center",
        fontSize: 24,
        fontFamily: "Raleway-SemiBoldItalic",

        color: "#63103e",
    },

    backgroundModalWindowEvent: {
        // display: 'flex',
        // marginLeft: 0,
        alignItems: "center",
        backgroundColor: "white",
        // marginBottom: 20,
        // width: '100%',

        borderColor: "#cf8496",
        borderBottomWidth: 1,
        paddingBottom: 60,
        paddingTop: 40,
    },

    textModalWindowEvent: {
        fontFamily: "Raleway-SemiBoldItalic",
        fontSize: 22,
        paddingTop: 15,
    },

    buttonItem: {
        display: "flex",
        flexDirection: "row",
    },

    buttonModalWindowEvent: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '12%',
        marginRight: '12%',
        elevation: 2,
        // padding: 15,
        // backgroundColor: 'red',
    },

    containerAgenda: {
        flex: 1,
    },

    agenda: {
        // flex: 1,
        // width: '100%',
        backgroundColor: "rgba(255, 255, 255, 0.0)",
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
        fontFamily: "Raleway-SemiBoldItalic",
        fontSize: 16,

        marginLeft: 6,
    },
});
