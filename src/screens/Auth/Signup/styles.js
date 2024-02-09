import {StyleSheet,Dimensions} from 'react-native';
import {colors, HP, WP, size,family} from '../../../utils';
const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
  },
  subHeading: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.white,
  },
  smallHeading: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
  },

  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
  textInput: {
    width: width * 0.9,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#231925',
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: colors.white,
    marginHorizontal: 10,
  },

  errorText: {
    color: colors.red,
    fontSize: size.small,
  },
  subText: {
    color: colors.white,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialText: {
    color: colors.white,
    fontSize: size.medium,
    fontWeight: '700',
    marginVertical:20
  },
  circle:{
    borderWidth: 1,
    borderColor: colors.white,
    width: 50,
    height: 50,
    padding:12,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  smallIcon:{
    width:30,
    height:30
  }
});

export default styles;
