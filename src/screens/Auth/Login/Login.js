import React, {Component} from 'react';
import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {colors, platform} from '../../../utils';
import CustomTextInput from '../../../components/CustomTextInput';
import {appIcons} from '../../../assets';
import NavService from '../../../helpers/NavService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }

  loginHandler = values => {
    console.log('Form submitted with values:', values);
    let payload ={
      email:values.email,
       password:values.password, user_type:'user' ,device_type:platform.OS, device_token:'123'
    }
    // Add your logic here to handle the login, for example:
    // this.props.loginUser(values);
  };

  handleFocus = inputName => {
    this.setState({focusedInput: inputName});
  };

  handleBlur = () => {
    this.setState({focusedInput: null});
  };

  render() {
    const {focusedInput} = this.state;
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
    });

    return (
      <CustomBackground back={false} showLogo={true}>
        <View style={styles.container}>
          <Text style={styles.heading}> Welcome Back! </Text>
          <View style={styles.flexBox}>
            <Text style={styles.subHeading}>Login below or</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => NavService.navigate('Signup')}
              style={{alignItems: 'center'}}>
              <Text style={styles.smallHeading}> Create an Account </Text>
            </TouchableOpacity>
          </View>

          <Formik
            validationSchema={validationSchema}
            initialValues={{email: ''}}
            onSubmit={values => this.loginHandler(values)}>
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
                  secureTextEntry={true}
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
                <TouchableOpacity
                  style={styles.forget}
                  onPress={() => {
                    NavService.navigate('ForgotPassword');
                  }}
                  activeOpacity={0.8}>
                  <Text style={styles.subText}>Forgot Password?</Text>
                </TouchableOpacity>
                <CustomButton
                  title="LOGIN"
                  onPress={handleSubmit}
                  textStyle={{fontSize: 18}}
                  buttonStyle={{marginTop: 20}}
                />
              </View>
            )}
          </Formik>
        </View>
      </CustomBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(Login);
