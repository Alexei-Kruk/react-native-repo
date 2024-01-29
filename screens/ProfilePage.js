import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import ProfileAvatar from "../components/profile-avatar/ProfileAvatar";


import { MainStyle } from "../styles/MainStyles";


export default function ProfilePage() {
    return (
        <View style={MainStyle.main}>
            <Text style={MainStyle.title}>Профиль</Text>  

            <View style={styles.containerProfile}>
                <View>
                    <ProfileAvatar />

                    <View>

                    </View>  
                </View>
                



                <View style={styles.dataProfile}>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            number: ''
                        }}
                        onSubmit={(value, action) => {
                            data(value);
                            action.resetForm();
                        }}
                    >
                        
                        {(props) => (
                    <View>
                        <TextInput
                            style={styles.formData}
                            value={props.values.name}
                            placeholder='Enter name article'
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.formData}
                            value={props.values.anons}
                            multiline
                            placeholder='Enter anons'
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput
                            style={styles.formData}
                            value={props.values.full}
                            multiline
                            placeholder='Enter text'
                            onChangeText={props.handleChange('full')}
                        />

                        <Button
                            style={styles.formButton}
                            title='Add article'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
                    </Formik>
                </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        
        
    },
    
    formData: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 20,
    },

    formButton: {
        
    }
});