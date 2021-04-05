import React, { useRef, useState, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import { styles } from "./style";
import OTPInput from "react-native-otp-textinput";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Animated } from "react-native";
import firebase from "../../service/firebase/firebase-authentication";
import {
    FirebaseRecaptchaVerifierModal,
    FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { useDispatch } from 'react-redux'
import { registerAccount } from "../../redux/actions/account";

export default function OtpSmsScreen(props) {

    const dispatch = useDispatch();
    // console.log("props of otp:", props);
    const newAccount = props.route.params.newAccount.newAccount;
    const numberPhoneValue = props.route.params.numberPhoneValue;
    const numberPhone = newAccount.numberPhone;
    const password = newAccount.password;

    // console.log("numberphone value", numberPhoneValue);

    const [duration, setDuration] = useState(10);
    const [isShowButton, setIsShowButton] = useState(false);
    const [key, setKey] = useState(0);
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState();


    const onComplete = () => {
        setIsShowButton(true);
    };

    const handleTextChange = (text) => {
        if (text.length === 6) {
            confirmCode(text);
        }
    };

    const handleReSendOtp = () => {
        setIsShowButton(false);
        sendVerification();
        setKey((preventKey) => preventKey + 1);
        console.log("hello");
    };

    const sendVerification = () => {
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            phoneProvider
                .verifyPhoneNumber(numberPhoneValue, recaptchaVerifier.current)
                .then(setVerificationId)
                .catch((error) => { console.error(error); });
            console.log("send success");
        } catch (error) {
            console.error("err sendVerification: ", error);
        }

    };

    const confirmCode = (code) => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                code
            );
            firebase
                .auth()
                .signInWithCredential(credential)
                .then((result) => {
                    dispatch(registerAccount(
                        { numberPhone, password },
                        newAccount.storeName,
                        newAccount.selectedImage,
                        newAccount.address));

                        
                    // console.log(result);
                }).catch(console.log("sai ma code"));
        } catch (error) {
            console.error("confirm code err: ", error);
        }
    }

    useEffect(() => {
        sendVerification();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="height"
                enabled
            >
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <FirebaseRecaptchaVerifierModal
                            ref={recaptchaVerifier}
                            firebaseConfig={firebase.app().options}

                        />
                        <View style={styles.formContainer}>
                            <View>
                                <Text style={[styles.title, { fontWeight: 'bold', fontSize: 25 }]}>Xác nhận mã OTP</Text>
                            </View>
                            <View style={{ marginTop: "2%" }}>
                                <Text style={styles.title}>
                                    Một mã xác nhận gồm 6 số đã được gửi đến
                                </Text>
                                <Text style={styles.title}>số điện thoại
                                    <Text> {newAccount.numberPhone}</Text>
                                </Text>

                            </View>
                            <View style={styles.marginContainer}>
                                <View>
                                    <Text style={styles.title}>
                                        Nhập mã để tiếp tục
                                </Text>
                                </View>
                                <OTPInput
                                    inputCount={6}
                                    handleTextChange={text => { handleTextChange(text) }}

                                />
                            </View>

                            <View style={[styles.rowContainer, styles.marginContainer, { justifyContent: "center" }]}>
                                <Text style={styles.title}>Bạn không nhận được mã ? </Text>

                                {
                                    isShowButton
                                        ? (<TouchableHighlight
                                            onPress={() => { console.log('click'); handleReSendOtp() }}
                                            style={{ backgroundColor: "red", width: 100, height: 50 }}
                                        >
                                            <Text style={[[styles.title, { marginRight: 5, color: "#004777" }]]}> Gửi lại</Text>
                                        </TouchableHighlight>)
                                        : <Text style={[[styles.title, { marginRight: 5 }]]}> Gửi lại sau</Text>
                                }

                                <CountdownCircleTimer
                                    key={key}
                                    isPlaying
                                    duration={duration}
                                    strokeWidth={0}
                                    size={28}
                                    onComplete={onComplete}
                                    colors={[
                                        ['#004777', 1],

                                    ]}
                                >
                                    {({ remainingTime, animatedColor }) => {

                                        return (

                                            <Animated.Text style={{ color: animatedColor, fontSize: 22 }}>
                                                {remainingTime}
                                            </Animated.Text>
                                        )
                                    }}
                                </CountdownCircleTimer>



                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>

    )
}
