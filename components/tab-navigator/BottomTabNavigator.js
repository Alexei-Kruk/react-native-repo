import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import CalendarPage from '../../screens/CalendarPage';
import ContactsPage from '../../screens/ContactsPage';
import FormWriteDownClient from '../../screens/FormWriteDownClient';
import WaitingList from '../../screens/WaitingList';
import ProfilePage from '../../screens/ProfilePage';


const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    
                    // name="CalendarPage"
                    // component={CalendarPage}
                />
                {/* <Tab.Screen
                    name="ContactsPage"
                    component={ContactsPage}
                />
                <Tab.Screen
                    name="FormWriteDownClient"
                    component={FormWriteDownClient}
                    />
                <Tab.Screen
                    name="WaitingList"
                    component={WaitingList}
                />
                <Tab.Screen
                    name="ProfilePage"
                    component={ProfilePage}
                /> */}
            </Tab.Navigator>    
        </NavigationContainer>
    );
}

