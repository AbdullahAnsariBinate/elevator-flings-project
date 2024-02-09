import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size,family} from '../../utils';

const {width,height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: width - 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 60,
    justifyContent: 'center',
    
  },
  buttonInnerImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
    position: 'absolute',
    left: width / 8,
  },
  buttonInnerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.white,
    position: 'absolute',
    left: width / 5,
  },
  applogo:{
    width:width*0.91,
    height:height*0.22,
    resizeMode:"contain",
    marginVertical:"12%"
  },
  space:{
    paddingBottom:20
  },
  login:{
    color:colors.white,
    fontSize:size.xlarge,
    fontFamily:family.Jost_SemiBold,
  },
  prelogin:{
    marginVertical:20
  },
});

export default style;
