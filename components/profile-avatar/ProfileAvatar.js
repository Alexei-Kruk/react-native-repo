import React from "react";
import { View, Image, StyleSheet } from 'react-native';


export default function ProfileAvatar() {
    return (
        <View>
            <Image
                style={styles.imageProfile}
                source={require('./avatar.png')}
            />
        </View>            
    );
};


const styles = StyleSheet.create({
    imageProfile: {
        width: '39.5%',
        height: '62.5%',
        marginLeft: '29%',
    }
});