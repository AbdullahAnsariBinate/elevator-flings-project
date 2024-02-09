import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: 40,
  },
  profileCircle: {
    borderWidth: 1,
    borderColor: '#919191',
    width: 128,
    height: 128,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profile: {
    width: '100%',
    height: '100%',
  },
  edit: {
    width: 20,
    height: 20,
  },
  editCircle: {
    position: 'absolute',
    zIndex: 30,
    right: 130,
    top: 95,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.white,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.white,
    fontSize: size.medium,
    fontWeight: '600',
    marginTop: 30,
    marginLeft: 30,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    color: colors.gray,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    width:'70%'
  },
  box: {
    width: '86%',
    height: 130,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F222A',
  },
  Image: {width: 100, height: 100, borderRadius: 10},
  cross:{
    width: 15,
    height: 15,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  errorText: {
    color: colors.red,
    fontSize: size.small,
  },
  textInput: {
    width: width * 0.9,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#231925',
  },
});

export default styles;
