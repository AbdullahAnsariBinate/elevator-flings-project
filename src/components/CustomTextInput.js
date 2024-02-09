import React, {useState} from 'react';
import {TouchableOpacity, View, Image, TextInput, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {appIcons} from '../assets';
import {colors, size, family} from '../utils';

export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
console.log(hidden,'==hidden');
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    textInputStyles,
    show = true,
  } = props;

  return (
    <View style={{marginTop: 18}}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '85%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            borderRadius: 30,
            paddingHorizontal: 7,
            paddingVertical: 2,
            height: 58,
            borderWidth: 0,
            borderColor: colors.lightGray,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.primary,
              marginHorizontal: 10,
            }}
          />
        ) : null}

        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,
              justifyContent: 'center',
            },
            borderStyles,
          ]}>
          <View style={{flex: 1}}>
            {/* {show && (
              <Text
                style={{
                  color: colors.white,
                  fontFamily: family.Jost_Bold,
                  fontSize: size.small,
                  position: 'absolute',
                  top: 3,
                }}>
                {placeholder.toUpperCase()}
              </Text>
            )} */}
            <TextInput
              placeholderTextColor={props?.placeholderColor || colors.black}
              style={{
                flex: 1,
                color: colors.white,
                fontSize: size.small,
                fontFamily: family.Jost_Regular,
                // paddingTop: 25,
                ...textInputStyles,
              }}
              secureTextEntry={hidden}
              autoCapitalize="none"
              {...props}
            />
          </View>
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.eye : appIcons.eyeNot}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {props?.otherIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => setHidden(!hidden)}
            >
              <Image
                source={props?.other}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
export function ProfileTextInput(props) {
  const {icon} = props;
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        paddingHorizontal: 10,

        // backgroundColor: colors.cardBackground,
      }}>
      <Image
        source={icon}
        style={{width: 15, height: 15, resizeMode: 'contain'}}
      />

      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: colors.primary,
          marginLeft: 10,
          fontFamily: family.Outfit_Regular,
        }}
        placeholderTextColor={'#7E7E7E'}
        {...props}
      />
    </View>
  );
}
export function CustomPhoneInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {containerStyle, types, placeholder, color, placeholderColor, verify} =
    props;
  return (
    <View style={{width: '100%', marginTop: 18}}>
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 5,
            height: 55,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.iconcolor,
              marginHorizontal: 10,
              // marginTop: 5,
            }}
          />
        ) : null}
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderLeftColor: colors.border,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInputMask
              type={'cel-phone'}
              style={{
                flex: 1,
                color: colors.black,
                paddingLeft: 10,
                fontSize: size.small,
              }}
              onChangeText={phoneNumberFormat => {
                let phoneNumber = phoneNumberFormat
                  .toString()
                  .replace(/\D+/g, '');
                props?.onChangePhoneInput(phoneNumberFormat, phoneNumber);
              }}
              maxLength={
                props?.formattedPhoneNumber.toString().startsWith('1') ? 18 : 19
              }
              options={
                props?.phoneNumber.startsWith('1')
                  ? {
                      dddMask: '9 (999) 999 - ',
                    }
                  : {
                      dddMask: '(999) 999 - ',
                    }
              }
              {...props}
            />
            {props.verify && (
              <Text
                style={{
                  color: colors.red,
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                Verify
              </Text>
            )}
          </View>
          {props.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.Visible : appIcons.Unvisible}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}