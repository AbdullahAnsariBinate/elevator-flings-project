import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appImages} from '../assets';
import {colors} from 'react-native-elements';
import {family, size} from '../utils';

const TemplateCard = ({img}) => {
  return (
    <View
      style={{
        width: 165,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        paddingVertical: 2,
        margin: 6,
        alignSelf: 'center',
      }}>
      <Image
        source={img}
        resizeMode="contain"
        style={{
          height: 100,
          width: '100%',
          overflow: 'hidden',
        }}
      />
      <View style={{paddingLeft: 10, marginTop: 5}}>
        <Text
          style={{
            color: colors.primary,
            fontFamily: family.Jost_SemiBold,
            fontSize: size.medium,
          }}>
          Consecteture Adipiscing Elit
        </Text>
        <Text
          style={{
            color: colors.grey1,
            fontFamily: family.Jost_SemiBold,
            fontSize: size.medium,
          }}>
          20min
        </Text>
      </View>
    </View>
  );
};

export default TemplateCard;

const styles = StyleSheet.create({});
