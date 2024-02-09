import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Keyboard,
} from 'react-native';
// import { colors } from '../../../utils';
import CustomModal from './CustomModal';
import {family, size, colors} from '../utils';
import Img from './Img';
import {appIcons} from '../assets';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
import Toast from 'react-native-toast-message';
// import { appIcons } from '../../../assets';
// import Img from '../../../components/Img';
// import styles from './styles';
const {width} = Dimensions.get('screen');
const AddCardModal = ({
  isVisible,
  currentfocus,
  deleteName,
  reportName,
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  onReport = () => {},
}) => {
  console.log({currentfocus});

  const onPress = () => {
    Keyboard.dismiss();
    const {name, cardNumber, expiry, cvc} = currentfocus.state;
    if (!name && !cardNumber && !expiry && !cvc) {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!name) {
      Toast.show({
        text1: 'Please enter name on card',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!cardNumber) {
      Toast.show({
        text1: 'Please enter card number',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (cardNumber.length !== 16) {
      Toast.show({
        text1: 'Card Number must be 16 numbers long',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!expiry) {
      Toast.show({
        text1: 'Please enter expiry date',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!cvc) {
      Toast.show({
        text1: 'Please enter cvc',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      onSubmit();
    }
  };

  return (
    <CustomModal
      backdropColor={colors.black}
      visible={isVisible}
      togglePopup={onToggle}
      style={{
        width: '90%',
      }}>
      <View style={styles.viewStyle1}>
        <TouchableOpacity onPress={onCross}>
          <Img
            local
            src={appIcons.x}
            style={{
              width: 18,
              height: 18,
              position: 'absolute',
              right: 0,
              bottom: -5,
            }}
            tintColor={colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Enter Card Details</Text>
        <CustomTextInput
          show={false}
          placeholder={'Name on Card'}
          placeholderColor={colors.black}
          textInputStyles={{
            paddingTop: 10,
            fontSize: size.large,
            color: colors.black,
          }}
          containerStyle={{
            backgroundColor: colors.white,
            width: '100%',
            borderRadius: 30,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: colors.primary,
          }}
          value={currentfocus.state.name}
          onChangeText={txt => currentfocus.setState({name: txt})}
        />
        <CustomTextInput
          show={false}
          placeholder={'Card Number'}
          placeholderColor={colors.black}
          textInputStyles={{
            paddingTop: 10,
            fontSize: size.large,
            color: colors.black,
          }}
          keyboardType={'numeric'}
          containerStyle={{
            backgroundColor: colors.white,
            width: '100%',
            borderRadius: 30,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: colors.primary,
          }}
          maxLength={16}
          value={currentfocus.state.cardNumber}
          onChangeText={txt => currentfocus.setState({cardNumber: txt})}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <CustomTextInput
            placeholder={'Expiry Date'}
            placeholderColor={colors.black}
            keyboardType={'number-pad'}
            containerStyle={{
              width: width / 2 - 50,
              backgroundColor: colors.white,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: colors.primary,
            }}
            textInputStyles={{
              paddingTop: 10,
              fontSize: size.large,
              color: colors.black,
            }}
            value={currentfocus.state.expiry}
            onChangeText={txt => currentfocus.setState({expiry: txt})}
          />
          <CustomTextInput
            placeholder={'CVC'}
            placeholderColor={colors.black}
            keyboardType={'number-pad'}
            maxLength={3}
            containerStyle={{
              width: width / 2 - 50,
              backgroundColor: colors.white,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: colors.primary,
            }}
            textInputStyles={{
              paddingTop: 10,
              fontSize: size.large,
              color: colors.black,
            }}
            value={currentfocus.state.cvc}
            onChangeText={txt => currentfocus.setState({cvc: txt})}
          />
        </View>
        <CustomButton
          title="Save"
          onPress={() => {
            onPress();
          }}
          buttonStyle={{width: '50%', alignSelf: 'center', marginTop: 20}}
          textStyle={{fontSize: 18}}
        />
      </View>
    </CustomModal>
  );
};

export default AddCardModal;

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 25,
    height: 400,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  viewStyle2: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    right: 2,
  },
  tchStyle1: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  tchStyle2: {
    paddingBottom: 10,
    borderBottomWidth: 0.75,
    borderColor: colors.secondary,
  },
  txtStyle1: {
    color: colors.secondary,
    fontSize: size.xxlarge,
    fontFamily: family.RedHatDisplay_ExtraBold,
    textAlign: 'center',
    marginTop: 20,
  },
  txtStyle2: {
    color: colors.black,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Medium,
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  btnstyle: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.secondary,
    marginTop: 25,
  },
  txtbtn: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
  },
  imgbg1: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  heading: {
    color: colors.primary,
    fontSize: 22,
    fontFamily: family.Jost_SemiBold,
    textAlign: 'center',
  },
});
