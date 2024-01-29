import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image, Modal, Alert, View, Text } from "react-native";
import { useState } from "react";

import event from "../../assets/data/event.json";


export default function Event() {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
            }}>
                <View style={styles.modalView}>
                    <Text style={styles.textEvent}>{event.name}</Text>
                    <Text style={styles.textEvent}>{event.number}</Text>
                    <Text style={styles.textEvent}>{event.service}</Text>
                    <Text style={styles.textEvent}>{event.commit}</Text>
                    <Text style={styles.textEvent}>{event.date}</Text>
                    <Text style={styles.textEvent}>{event.time}</Text>
                </View>

                <View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Закрыть</Text>
                    </Pressable>
                </View>
            </Modal>
            
            
            
            
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {

    },
})