import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import NavService from '../../../helpers/NavService';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {colors} from '../../../utils';
import styles from './styles';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import Img from '../../../components/Img';
import {connect} from 'react-redux';
import {signUpUser} from '../../../redux/actions/authAction';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      error: '',
    };
  }

  signuphandler = values => {
    if (values.password !== values.repeat) {
      this.setState({error: 'Password must be same'});
    } else {
      Keyboard.dismiss();
      this.setState({error: ''});
      let payload = {
        email: values.email,
        password: values.repeat,
        user_type: 'user',
      };
      console.log(payload, '====payload show');
      this.props.signUpUser(payload);
    }
  };

  handleFocus = inputName => {
    this.setState({focusedInput: inputName});
  };

  handleBlur = () => {
    this.setState({focusedInput: null});
  };

  render() {
    const {focusedInput, error} = this.state;
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required'),
      password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
      repeat: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    });
    return (
      <CustomBackground showLogo={true} onBack={() => NavService.goBack()}>
        <View style={styles.container}>
          <Text style={styles.heading}> Create account </Text>
          <View style={styles.flexBox}>
            <Text style={styles.subHeading}>
              Enter your account details below or
            </Text>
            <TouchableOpacity
              onPress={() => NavService.goBack()}
              activeOpacity={0.8}
              style={{alignItems: 'center'}}>
              <Text style={styles.smallHeading}> Login </Text>
            </TouchableOpacity>
          </View>

          <Formik
            validationSchema={validationSchema}
            initialValues={{email: ''}}
            onSubmit={values => this.signuphandler(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <CustomTextInput
                  leftIcon={appIcons.email}
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={() => {
                    this.handleBlur();
                    handleBlur('email');
                  }}
                  onFocus={() => this.handleFocus('email')}
                  value={values.email}
                  keyboardType="email-address"
                  placeholderColor={colors.white}
                  containerStyle={[
                    styles.textInput,
                    focusedInput === 'email' && {borderColor: colors.primary},
                  ]}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <CustomTextInput
                  isPassword
                  rightIcon
                  leftIcon={appIcons.lock}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={() => {
                    this.handleBlur();
                    handleBlur('password');
                  }}
                  onFocus={() => this.handleFocus('password')}
                  value={values.password}
                  keyboardType="email-address"
                  placeholderColor={colors.white}
                  containerStyle={[
                    styles.textInput,
                    focusedInput === 'password' && {
                      borderColor: colors.primary,
                    },
                  ]}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <CustomTextInput
                  secureTextEntry={true}
                  isPassword
                  rightIcon
                  leftIcon={appIcons.lock}
                  placeholder="Repeat Password"
                  onChangeText={handleChange('repeat')}
                  onBlur={() => {
                    this.handleBlur();
                    handleBlur('repeat');
                  }}
                  onFocus={() => this.handleFocus('repeat')}
                  value={values.Repeat}
                  keyboardType="email-address"
                  placeholderColor={colors.white}
                  containerStyle={[
                    styles.textInput,
                    focusedInput === 'Repeat' && {
                      borderColor: colors.primary,
                    },
                  ]}
                />
                {touched.repeat && errors.repeat && (
                  <Text style={styles.errorText}>{errors.repeat}</Text>
                )}
                {error && error && (
                  <Text style={styles.errorText}>{error}</Text>
                )}

                <CustomButton
                  title="Sign Up"
                  onPress={handleSubmit}
                  textStyle={{fontSize: 18}}
                  buttonStyle={{marginTop: 20}}
                />
              </View>
            )}
          </Formik>
          <Text style={styles.socialText}> Or Signup with </Text>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.circle}>
              <Img
                local
                resizeMode={'contain'}
                src={appIcons.facebook}
                style={styles.smallIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.circle, {marginHorizontal: 20}]}>
              <Img
                local
                resizeMode={'contain'}
                src={appIcons.google}
                style={styles.smallIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Img
                local
                resizeMode={'contain'}
                src={appIcons.apple}
                style={styles.smallIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

const actions = {signUpUser};
export default connect(null, actions)(Signup);
