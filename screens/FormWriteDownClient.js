import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { DatePickerIOS } from '@react-native-community/datetimepicker';
import { Formik } from 'formik';


import { MainStyle } from "../styles/MainStyles";


export default function FormWriteDownClient({ addClient }) {
    const [chosenDate, setChosenDate] = useState(new Date());
    
    return (
        <View style={MainStyle.main}>
            <Text style={MainStyle.title}>Запись клиентов</Text>
            
            <View style={styles.containerFormWrite}>
                <Formik
                    initialValues={{
                        name: '',
                        number: '',
                        service: '',
                        about: '',
                        comment: ''
                    }}
                    onSubmit={(value, action) => {
                        addClient(value);
                        action.FormWriteDownClient();
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                style={styles.formItem}
                                value={props.values.name}
                                placeholder='Имя клиента'
                                onChangeText={props.handleChange('name')}
                            />
                            <TextInput
                                style={styles.formItem}
                                value={props.values.number}
                                placeholder='Номер телефона'
                                onChangeText={props.handleChange('number')}
                            />
                            <TextInput
                                style={styles.formItem}
                                value={props.values.service}
                                placeholder='Услуга'
                                onChangeText={props.handleChange('service')}
                            />
                            <TextInput
                                style={styles.formItem}
                                value={props.values.about}
                                multiline
                                placeholder='Как клиент узнал обо мне'
                                onChangeText={props.handleChange('about')}
                            />
                            <TextInput
                                style={styles.formItem}
                                value={props.values.comment}
                                multiline
                                placeholder='Комментарий'
                                onChangeText={props.handleChange('comment')}
                            />
                            
                            {/* <View style={styles.changeData}>
                                <DatePickerIOS
                                    date={chosenDate}
                                    onDateChange={setChosenDate}
                                />
                            </View> */}

                            <TouchableOpacity
                                title='Записать'
                                onPress={props.handleSubmit}
                            >
                                <Text style={styles.formButton}>Записать</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    containerFormWrite: {
        flex: 1,
        
        backgroundColor: 'white',
    },
    
    formItem: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 12,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 30,
    },

    formButton: {
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        // backgroundColor: '#e0a6be',
        
        padding: 10,
        marginTop: 50,
        marginRight: 100,
        marginLeft: 100,
        
        color: '#63103e',
        
        fontFamily: 'Raleway-SemiBoldItalic',
        fontSize: 20,
        textAlign: 'center',

    }
})