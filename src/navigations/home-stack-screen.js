import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './tab-navigation';
import { MyHeader } from '../components/atoms/header/Header';
import QRCode from '../components/atoms/qr-code/qr-code';
import SignUp from '../components/atoms/sign-up';
import MenuDrawer from './drawer-navigation';

const HomeStack = createStackNavigator();



function HomeStackScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        // <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <HomeStack.Screen name="HOME" component={TabNavigation} />
                <HomeStack.Screen name="QRCODE" component={QRCode} />
                <HomeStack.Screen name="SIGNUP" component={SignUp} />
                
            </HomeStack.Navigator>
            
        // </NavigationContainer>

    );
};

export default HomeStackScreen;