import {StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  topContainer: {
    position: 'absolute',
    top: 40,
    zIndex: 1000,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.Jost_SemiBold,
    marginHorizontal: 15,
  },
  centerLine: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    height: 30,
  },
});

export default styles;
