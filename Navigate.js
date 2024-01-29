// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Calendar from './components/Calendar';
// import Contacts from './components/Contacts';
// import FormWriteDownClient from './components/FormWriteDownClient';
// import WaitingList from './components/WaitingList';
// import Account from './components/Account';

// import { MainStyle } from './styles/MainStyles';


// const Stack = createNativeStackNavigator();


// export default function Navigate() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name='Calendar'
//                     component={Calendar}
//                     options={
//                         {
//                             title: 'Calendar',
//                             headerStyle: { backgroundColor: '#FEE7EB', height: 100 },
//                             headerTitleStyle: { fontWeight: '400', fontSize: '20' }
//                         }
//                     }
//                 />
//                 <Stack.Screen
//                     name='Contacts'
//                     component={Contacts}
//                     options={{title: 'Contacts'}}
//                 />
//                 <Stack.Screen
//                     name='FormWriteDownClient'
//                     component={FormWriteDownClient}
//                     options={{title: 'FormWriteDownClient'}}
//                 />
//                 <Stack.Screen
//                     name='WaitingList'
//                     component={WaitingList}
//                     options={{title: 'WaitingList'}}
//                 />
//                 <Stack.Screen
//                     name='Account'
//                     component={Account}
//                     options={{title: 'Account'}}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     ); 
// }
