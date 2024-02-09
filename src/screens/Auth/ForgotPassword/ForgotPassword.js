import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {appIcons, appLogos} from '../../../assets/index';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }
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
    });

    return (
      <CustomBackground
        showLogo={true}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subTitle}>Enter Email</Text>
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
                  <CustomButton
                    title="Continue"
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

export default ForgotPassword;
