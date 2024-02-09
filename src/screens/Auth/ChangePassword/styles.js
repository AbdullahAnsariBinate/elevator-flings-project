import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size,family} from '../../../utils';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
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
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
  },
  applogo: {
    width: width * 0.70,
    height: height * 0.15,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  upload: {
    position: 'absolute',
    alignSelf: 'center',
    top: '74%',
    zIndex: 20,
    right: '28%',
  
  },
  login:{
    color:colors.white,
    fontSize:size.xlarge,
    fontFamily:family.Jost_SemiBold,
  },
});

export default styles;
