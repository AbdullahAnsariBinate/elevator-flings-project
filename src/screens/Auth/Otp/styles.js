import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  otpInput: {
    width: '90%',
    height: 20,
    alignSelf: 'center',
    marginVertical: 40,
  },
  underlineStyleBase: {
    width: 73,
    height: 50,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    color: colors.white,
    fontSize: 17,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.white,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.white,
  },
  
});

export default styles;
