import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {colors} from '../../../utils';
import {appIcons, appLogos} from '../../../assets/index';
import {schema} from '../../../utils/validation';
import styles from './styles';
class ChangePassword extends Component {
  state = {
    password: '',
    ConfirmPassword: '',
  };

  onSubmit = () => {
    const {password, ConfirmPassword} = this.state;
    if (password == '' || ConfirmPassword == '') {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!schema.validate(password)) {
      Toast.show({
        text1:
          'Password not valid (Use atleast one UpperCase Letter, one number and one special character',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (password != ConfirmPassword) {
      Toast.show({
        text1: 'Confrim password does not match',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'Password updated successfully',
        type: 'success',
        visibilityTime: 3000,
      });
      NavService.navigate('Login');
    }
  };

  render() {
    const {password, ConfirmPassword} = this.state;
    return (
      <CustomBackground
        showLogo={false}
        // titleText={'CHANGE PASSWORD'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, {marginTop: 20}]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <View style={styles.prelogin}>
            <Text style={styles.login}>RESET PASSWORD</Text>
          </View>
            <View style={styles.textNormal}>
              <CustomTextInput
                leftIcon={appIcons.lock}
                placeholder={'new password'}
                value={password}
                onChangeText={value => this.setState({password: value})}
                rightIcon
                isPassword
                containerStyle={{width:'100%'}}
              placeholderTextColor={colors.white}

              />
              <CustomTextInput
                leftIcon={appIcons.lock}
                placeholder={'confrim password'}
                value={ConfirmPassword}
                onChangeText={value => this.setState({ConfirmPassword: value})}
                rightIcon
                isPassword
                containerStyle={{width:'100%'}}
              placeholderTextColor={colors.white}


              />
              <CustomButton
                title="SUBMIT"
                onPress={this.onSubmit}
                buttonStyle={{marginTop:20}}
                textStyle={{fontSize: 18}}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default ChangePassword;
