import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flexHeader}>
                <Text style={styles.title}>Календарь</Text>
                <TouchableOpacity>
                    <Ionicons
                        style={styles.icon}
                        name="search"
                        size={30}
                        color="#4a4949"
                    />    
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

        // borderColor: '#cf8496',
        // borderBottomWidth: 1,
    },

    flexHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        marginTop: 75,
        marginLeft: 22,
        marginBottom: 15,
    },

    title: {
        fontSize: 32,
        fontWeight: 400,
        fontFamily: 'Raleway-Light',

        color: '#4a4949',
    },

    icon: {
        marginRight: 22,    
    }
})

