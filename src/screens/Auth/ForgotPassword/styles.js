import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  applogo: {
    width: width * 0.7,
    height: height * 0.15,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  login: {
    color: colors.white,
    fontSize: size.medium,
    fontFamily: family.Jost_SemiBold,
  },
  title: {
    color: colors.white,
    fontSize: size.xxlarge,
    fontWeight: '500',
  },
  subTitle: {
    color: colors.white,
    fontSize: size.small,
    marginVertical: 5,
    fontWeight: '500',
  },
  textInput: {
    width: width * 0.9,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#231925',
  },
  errorText: {
    color: colors.red,
    fontSize: size.small,
  },
});

export default styles;
