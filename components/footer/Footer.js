import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <AntDesign
                    style={styles.buttonScreen}
                    name="calendar"
                    size={30}
                    color="#63103e"
                />
                <Text style={styles.textFooterActive}>Календарь</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <AntDesign
                    style={styles.buttonScreen}
                    name="contacts"
                    size={30}
                    color="#bf8290"
                />  
                <Text style={styles.textFooter}>Контакты</Text>  
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <AntDesign
                    style={styles.buttonScreen}
                    name="addusergroup"
                    size={30}
                    color="#bf8290"
                    // onPress={() => FormWriteDownClient()}
                />    
                <Text style={styles.textFooter}>Запись</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <AntDesign
                    style={styles.buttonScreen}
                    name="clockcircleo"
                    size={30}
                    color="#bf8290"
                    // onPress={() => FormWriteDownClient()}
                />
                <Text style={styles.textFooter}>Ожидание</Text>    
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <AntDesign
                    style={styles.buttonScreen}
                    name="user"
                    size={30}
                    color="#bf8290"
                />
                <Text style={styles.textFooter}>Профиль</Text>  
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

        backgroundColor: '#FEE7EB',

        paddingBottom: 34,
        paddingTop: 12,

        borderColor: '#cf8496',
        borderTopWidth: 1,
    },

    item: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    buttonScreen: {
        marginBottom: 8,
    },

    textFooter: {
        fontFamily: 'Raleway-SemiBoldItalic',
        fontSize: 13,

        color: '#bf8290',
    },

    textFooterActive: {
        fontFamily: 'Raleway-SemiBoldItalic',
        fontSize: 13,

        color: '#63103e',
    }
})