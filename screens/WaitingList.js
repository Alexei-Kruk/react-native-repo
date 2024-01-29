import React from "react";
import { View, Text, StyleSheet } from 'react-native';


import { Octicons } from '@expo/vector-icons';


import { MainStyle } from "../styles/MainStyles";


export default function WaitingList() {
    return (
        <View style={MainStyle.main}>
            <Text style={MainStyle.title}>Лист ожидания</Text>
            <Octicons name="checklist" size={24} color="black" />  
        </View>
    )
};

