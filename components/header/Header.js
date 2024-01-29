import React from "react";
import { View, Text, StyleSheet } from "react-native";


export const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Календарь</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEE7EB',

        borderColor: '#cf8496',
        borderBottomWidth: 1,
    },

    title: {
        marginTop: 60,
        marginLeft: 20,
        marginBottom: 8,

        fontSize: 30,
        fontWeight: 100,
        fontFamily: 'Raleway-SemiBoldItalic',

        color: '#63103e',
    }
})

