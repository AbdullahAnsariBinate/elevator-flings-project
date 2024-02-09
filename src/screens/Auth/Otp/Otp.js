import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-toast-message';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';
import {getDeviceToken} from '../../../redux/actions/appAction';
import {useDispatch} from 'react-redux';
import {otpVerify} from '../../../redux/actions/authAction';

const Otp = ({navigation, route}) => {
  const {screenName, user_id, type} = route?.params;
  let timer;
  const [code, setCode] = useState('');
  const [timerCode, setTimerCode] = useState(30);
  const [resend, setResend] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
  
    if (code.length == 0) {
      Toast.show({
        text1: "OTP field can't be empty",
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      if (screenName == 'Signup') {
        console.log(code.length, '==code',screenName);
        let payload = {
          user_id: user_id,
          verified_code: code,
          type: type,
          device_type: Platform.OS,
          device_token: '123',
        };
        dispatch(otpVerify(payload, value => {}));
      }
    }
    // Keyboard.dismiss();
    // const fcmToken = null;
    // // console.log(fcmToken);
    // if (code?.length > 0) {
    //   if (screenName == 'Signup' || screenName == 'login') {
    //     let payload = {
    //       user_id: user_id,
    //       verified_code: code,
    //       type: type,
    //       device_type: Platform.OS,
    //       device_token: fcmToken ? fcmToken : '123',
    //     };
    //     dispatch(
    //       otpVerify(payload, value => {
    //         if (value?.status == 1) {
    //           setCode('');
    //         }
    //       }),
    //     );
    //   }
    //    else if (code?.length == 0) {
    //     Toast.show({
    //       text1: "OTP field can't be empty",
    //       type: 'error',
    //       visibilityTime: 300,
    //     });
    //   } else {
    //     Toast.show({
    //       text1: 'Invalid OTP verification code',
    //       type: 'error',
    //       visibilityTime: 300,
    //     });
    //   }
    // }
  };
  const startInterval = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setTimerCode(timerCode => {
        if (timerCode > 0) {
          return timerCode - 1;
        } else {
          setResend(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };

  // const handleReset = () => {
  //   if (resend) {
  //     const payload = {
  //       user_id: user_id,
  //     };
  //     Keyboard.dismiss();
  //     dispatch(resendOTP(payload));
  //     setTimerCode(59);
  //     setResend(false);
  //     setCode('');
  //     setKey(prevKey => prevKey + 1);
  //     startInterval();
  //   } else {
  //     Toast.show({
  //       text1: 'Please wait untill timer finishes!',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   }
  // };

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <CustomBackground showLogo={true} onBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <Text style={styles.title}>One Time Password</Text>
        <Text style={styles.subTitle}>Enter Your Otp</Text>
        <OTPInputView
          keyboardType="numeric"
          style={styles.otpInput}
          pinCount={4}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeChanged={c => {
            const cleanNumber = c.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
            setCode(cleanNumber);
          }}
          onCodeFilled={c => {
            const cleanNumber = c.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
            setCode(cleanNumber);
          }}
          code={code}
        />
        <CustomButton
          title="Continue"
          onPress={() => onSubmit()}
          textStyle={{fontSize: 18}}
        />
      </View>
    </CustomBackground>
  );
};

export default Otp;
