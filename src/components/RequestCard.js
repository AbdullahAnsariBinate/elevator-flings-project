import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, size, family} from '../utils';
import Img from './Img';
import {appIcons, appImages} from '../assets';
import CustomButton from './CustomButton';

const RequestCard = ({
  name,
  desc = false,
  cross = false,
  tick = false,
  arrow = false,
  onPress,
  guardian = false,
  // singleCross = false,
  currentFocus,
  onCross = () => {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.7 : 1}
      onPress={onPress ? onPress : () => {}}
      style={{
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: 'red',
              width: 50,
              height: 50,
              overflow: 'hidden',
              marginLeft: 8,
            }}>
            <Image
              source={appImages.user}
              style={{width: '100%', height: '100%', overflow: 'hidden'}}
              resizeMode="cover"
            />
          </View>
          <View style={{width: tick || cross ? '50%' : '90%', marginLeft: 10}}>
            <Text
              style={{
                color: colors.black,
                fontFamily: family.Jost_Bold,
                fontSize: size.large,
              }}>
              {name}
            </Text>
            {desc.length > 0 && (
              <Text
                style={{fontFamily: family.Jost_Medium, fontSize: size.small}}>
                {desc}
              </Text>
            )}
          </View>
        </View>
        {/* tick marks */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          {tick && (
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Img
                local
                src={appIcons.tick}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  margin: 5,
                }}
              />
            </TouchableOpacity>
          )}

          {cross && (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                onCross(name);
              }}>
              <Img
                local
                src={appIcons.cross}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
          )}

          {/*  */}

          {arrow && (
            <TouchableOpacity activeOpacity={0.6}>
              <Img
                local
                src={appIcons.arrow}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {guardian && (
        <CustomButton
          title="Add To Guardians"
          onPress={this.onSubmit}
          buttonStyle={{
            width: '40%',
            alignSelf: 'flex-end',
            height: 40,
            marginRight: 5,
          }}
          textStyle={{fontSize: 14}}
        />
      )}
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});
