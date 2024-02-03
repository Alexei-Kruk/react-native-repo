import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <Ionicons
                    style={styles.buttonScreen}
                    name="calendar"
                    size={28}
                    color="#f7adc3"
                />
                {/* <Text style={styles.textFooterActive}>Календарь</Text> */}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <Ionicons
                    style={styles.buttonScreen}
                    name="people"
                    size={28}
                    color="#f7adc3"
                />  
                {/* <Text style={styles.textFooter}>Контакты</Text>   */}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <Octicons
                    style={styles.buttonScreen}
                    name="plus"
                    size={28}
                    color="#f7adc3"
                    // onPress={() => FormWriteDownClient()}
                />    
                {/* <Text style={styles.textFooter}>Запись</Text> */}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <Ionicons
                    style={styles.buttonScreen}
                    name="time"
                    size={28}
                    color="#f7adc3"
                    // onPress={() => FormWriteDownClient()}
                />
                {/* <Text style={styles.textFooter}>Ожидание</Text>     */}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <Ionicons
                    style={styles.buttonScreen}
                    name="person-circle"
                    size={28}
                    color="#f7adc3"
                />
                {/* <Text style={styles.textFooter}>Профиль</Text>   */}
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        // backgroundColor: "transparent",

        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 45,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 6,
        paddingRight: 6,

        borderRadius: '50%',
        borderColor: '#e0e0e0',
        borderWidth: 4,

        shadowColor: "#4a4949",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadiusBottom: 15,
        elevation: 5,
    },

    item: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    buttonScreen: {
        // marginBottom: 8,
    },

    // textFooter: {
    //     fontFamily: 'Raleway-SemiBoldItalic',
    //     fontSize: 13,

    //     color: '#bf8290',
    // },

    // textFooterActive: {
    //     fontFamily: 'Raleway-SemiBoldItalic',
    //     fontSize: 13,

    //     color: '#63103e',
    // }
})