import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/login';
import RegisterAccountScreen from '../../screens/register-account';
import OtpSmsScreen from '../../screens/otp-sms/index'

const LoginStack = createStackNavigator();

function LoginStackScreen() {
    return (

        <LoginStack.Navigator
            screenOptions={{ headerShow: false }}
        >

            <LoginStack.Screen name="LOGIN" component={Login} options={{ headerShown: false }} />
            <LoginStack.Screen name="REGISTER_ACCOUNT"
                options={{ title: "Đăng ký tài khoản" }}
                component={RegisterAccountScreen} />
            <LoginStack.Screen name="OTP_SMS"
                component={OtpSmsScreen}
                options={{ title: "" }}
            />
        </LoginStack.Navigator>

    );
};

export default LoginStackScreen;