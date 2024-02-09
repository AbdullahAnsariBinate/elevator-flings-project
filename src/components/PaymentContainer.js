import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Img from './Img';
import {appIcons, appImages} from '../assets';
import {colors} from 'react-native-elements';
import {family, size} from '../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PaymentContainer = ({name, number, src}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={{flexDirection: 'row'}}>
        <Img
          local
          src={src}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode={'contain'}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.name}>{name}</Text>
          <Text
            style={{
              fontSize: size.small,
            }}>
            {number}
          </Text>
        </View>
      </View>
      <View>
        <Img
          local
          src={appIcons.arrow}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PaymentContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  name: {
    color: colors.black,
    fontSize: size.normal,
    fontFamily: family.Jost_SemiBold,
  },
});
