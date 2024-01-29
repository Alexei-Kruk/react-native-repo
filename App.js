import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import Navigate from './Navigate';
import { ScrollView, View, StatusBar } from 'react-native';


import Calendar from './screens/CalendarPage';
import Contacts from './screens/ContactsPage';
import FormWriteDownClient from './screens/FormWriteDownClient';
import WaitingList from './screens/WaitingList';
import ProfilePage from './screens/ProfilePage';
import CalendarPageNew from './screens/CalendarPageNew';


// import MyTabs from './components/tab-navigator/BottomTabNavigator';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';



SplashScreen.preventAutoHideAsync();


export default function App() {
	const [fontsLoaded] = useFonts({
		// 'globerthinfree': require('./assets/fonts/globerthinfree.ttf'),
		// 'Caveat': require('./assets/fonts/Caveat-Regular.ttf'),
		// 'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
		// 'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
		// 'Raleway-Thin': require('./assets/fonts/Raleway-Thin.ttf'),
		// 'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
		// 'Raleway-ExtraLight': require('./assets/fonts/Raleway-ExtraLight.ttf'),
		'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
		// 'Raleway-ThinItalic': require('./assets/fonts/Raleway-ThinItalic.ttf'),
		// 'Raleway-LightItalic': require('./assets/fonts/Raleway-LightItalic.ttf'),
		// 'Raleway-ExtraLightItalic': require('./assets/fonts/Raleway-ExtraLightItalic.ttf'),
		// 'Raleway-MediumItalic': require('./assets/fonts/Raleway-MediumItalic.ttf'),
		'Raleway-SemiBoldItalic': require('./assets/fonts/Raleway-SemiBoldItalic.ttf'),
	});


	const [font, setFont] = useState(false);


	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);
	
	if (!fontsLoaded) {
		return null;
	}
	

	if(font) {
		return (
			<View style={{flex: 1}}>
				<StatusBar />
				<Header />
				{/* <ScrollView> */}
					<CalendarPageNew />
					{/* <Contacts />
					<FormWriteDownClient />
					<WaitingList />
					<ProfilePage /> */}
				{/* </ScrollView> */}
				<Footer />
			</View>
  		);
	} else {
		return (
			<AppLoading
				startAsync={font}
				onFinish={() => setFont(true)}
				onError={console.warn}
			/>
		);
	};
}


