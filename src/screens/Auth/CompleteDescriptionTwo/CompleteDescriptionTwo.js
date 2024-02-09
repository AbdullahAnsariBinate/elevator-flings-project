import React, {Component, createRef, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import CustomBackground from '../../../components/CustomBackground';
import {appIcons} from '../../../assets/index';
import {loginUser, completeProfile} from '../../../redux/actions/authAction';
import styles from './styles';
import Img from '../../../components/Img';
import {colors, family, size} from '../../../utils';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import ActionSheetComponent from '../../../components/ActionSheetComponent';

const {width} = Dimensions.get('screen');
class CompleteDescriptionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      piercings: '',
      tattos: '',
      smoking: '',
      drinking: '',
      ethnicity: '',
      salary: '',

      piercingsError: '',
      tattosError: '',
      SmokingError: '',
      drinkingError: '',
      ethnicityError: '',
      salaryError: '',
    };
    this.actionSheetPiercings = createRef();
    this.actionSheetTattoos = createRef();
    this.actionSheetSmoking = createRef();
    this.actionSheetDrinking = createRef();
    this.actionSheetEthnicity = createRef();
    this.actionSheetSalary = createRef();
  }

  continue = values => {
    const {
      ImagePath,
      ImageMime,
      MultileImages,
      fullname,
      dateOfBirth,
      bio,
      lookingFor,
      allTags,
      education,
      career,
      weight,
      height,
      networth,
      gender,
      intention,
    } = this?.props?.route?.params;
    const {piercings, tattos, smoking, drinking, ethnicity, salary} =
      this.state;

    if (!piercings) {
      this.setState({piercingsError: 'please select piercings'});
    } else if (!tattos) {
      this.setState({tattosError: 'Tattos is required'});
    } else if (!smoking) {
      this.setState({SmokingError: 'please select smoking'});
    } else if (!drinking) {
      this.setState({drinkingError: 'please select drinking'});
    } else if (!ethnicity) {
      this.setState({ethnicityError: 'please select ethnicity'});
    } else if (!salary) {
      this.setState({salaryError: 'please select salary'});
    } else {
      Keyboard.dismiss();
      this.setState({
        piercingsError: '',
        tattosError: '',
        SmokingError: '',
        drinkingError: '',
        ethnicityError: '',
        salaryError: '',
      });

      const params = new FormData();
      if (ImageMime)
        params.append('profile_image', {
          uri: ImagePath,
          name: `Profile${Date.now()}.${ImageMime.slice(
            ImagePath.lastIndexOf('/') + 1,
          )}`,
          type: ImageMime,
        });
      params.append('full_name', fullname);
      params.append('date_of_birth', dateOfBirth);
      params.append('gender', gender);
      params.append('about', bio);
      params.append('intention', intention);
      params.append('looking_for', lookingFor);
      params.append('interests', allTags);
      params.append('education', education);
      params.append('career', career);
      params.append('weight', weight);
      params.append('height', height);
      params.append('networth', networth);
      params.append('body_type', values.bodyType);
      params.append('hair_color', values.hairColor);
      params.append('eye_color', values.eyeColor);
      params.append('piercings', piercings);
      params.append('tattos', tattos);
      params.append('smoking', smoking);
      params.append('drinking', drinking);
      params.append('ethnicity', ethnicity);
      params.append('uploads[]', MultileImages);
      params.append('salary_bracket', salary);
      this?.props?.completeProfile(params, '');
    }
  };

  handleFocus = inputName => {
    this.setState({focusedInput: inputName});
  };

  handleBlur = () => {
    this.setState({focusedInput: null});
  };

  render() {
    const {
      focusedInput,
      piercings,
      tattos,
      smoking,
      drinking,
      ethnicity,
      salary,

      piercingsError,
      tattosError,
      SmokingError,
      drinkingError,
      ethnicityError,
      salaryError,
    } = this.state;

    const validationSchema = Yup.object().shape({
      bodyType: Yup.string().required('Body Type is required'),
      hairColor: Yup.string().required('Hair Color is required'),
      eyeColor: Yup.string().required('Eye Color is required'),
    });

    const piercingsArray = ['piercing One', 'piercing two', 'piercing three'];
    const tattosArray = ['Bingo', 'Dunkin', 'Donuts'];
    const smokingArray = ['Gold leaf', 'Pine'];
    const drinkingArray = ['Pakola', 'aquia', 'polar'];
    const ethnicityArray = ['option A', 'option B'];
    const salaryArray = ['20000', '30000'];
    return (
      <CustomBackground
        showLogo={false}
        titleText={'Descriptions'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <ActionSheetComponent
            ref={this.actionSheetPiercings}
            title="Select Piercings"
            dataset={piercingsArray}
            onPress={item => {
              this.setState({piercings: item});
            }}
          />
          <ActionSheetComponent
            ref={this.actionSheetTattoos}
            title="Select Tattoos"
            dataset={tattosArray}
            onPress={item => {
              this.setState({tattos: item});
            }}
          />

          <ActionSheetComponent
            ref={this.actionSheetSmoking}
            title="Select Smoking"
            dataset={smokingArray}
            onPress={item => {
              this.setState({smoking: item});
            }}
          />

          <ActionSheetComponent
            ref={this.actionSheetDrinking}
            title="Select Drinking"
            dataset={drinkingArray}
            onPress={item => {
              this.setState({drinking: item});
            }}
          />

          <ActionSheetComponent
            ref={this.actionSheetEthnicity}
            title="Select Ethnicity"
            dataset={ethnicityArray}
            onPress={item => {
              this.setState({ethnicity: item});
            }}
          />
          <ActionSheetComponent
            ref={this.actionSheetSalary}
            title="Select Salary bracket"
            dataset={salaryArray}
            onPress={item => {
              this.setState({salary: item});
            }}
          />
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                bodyType: '',
                hairColor: '',
                eyeColor: '',
              }}
              onSubmit={values => this.continue(values)}>
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
                    placeholder="Body Type"
                    onChangeText={handleChange('bodyType')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('bodyType');
                    }}
                    onFocus={() => this.handleFocus('bodyType')}
                    value={values?.bodyType}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'bodyType' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.bodyType && errors.bodyType && (
                    <Text style={styles.errorText}>{errors.bodyType}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Hair Color"
                    onChangeText={handleChange('hairColor')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('hairColor');
                    }}
                    onFocus={() => this.handleFocus('hairColor')}
                    value={values?.hairColor}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'hairColor' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.hairColor && errors.hairColor && (
                    <Text style={styles.errorText}>{errors.hairColor}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Eye Color"
                    onChangeText={handleChange('eyeColor')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('eyeColor');
                    }}
                    onFocus={() => this.handleFocus('eyeColor')}
                    value={values?.eyeColor}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'eyeColor' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.eyeColor && errors.eyeColor && (
                    <Text style={styles.errorText}>{errors.eyeColor}</Text>
                  )}
                  <TouchableOpacity
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 58,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        marginTop: 20,
                        alignItems: 'center',
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetPiercings.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {piercings ? piercings : 'Piercings'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {piercingsError && (
                    <Text style={styles.errorText}>{piercingsError}</Text>
                  )}

                  <TouchableOpacity
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 58,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        alignItems: 'center',
                        marginTop: 20,
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetTattoos.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {tattos ? tattos : 'Tattos'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {tattosError && (
                    <Text style={styles.errorText}>{tattosError}</Text>
                  )}

                  <TouchableOpacity
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 58,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        alignItems: 'center',
                        marginTop: 20,
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetSmoking.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {smoking ? smoking : 'Smoking'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {SmokingError && (
                    <Text style={styles.errorText}>{SmokingError}</Text>
                  )}

                  <TouchableOpacity
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 58,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        alignItems: 'center',
                        marginTop: 20,
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetDrinking.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {drinking ? drinking : 'Drinking'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {drinkingError && (
                    <Text style={styles.errorText}>{drinkingError}</Text>
                  )}
                  <TouchableOpacity
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 58,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        alignItems: 'center',
                        marginTop: 20,
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetEthnicity.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {ethnicity ? ethnicity : 'Ethnicity'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {ethnicityError && (
                    <Text style={styles.errorText}>{ethnicityError}</Text>
                  )}
                  <TouchableOpacity
                    style={[
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 58,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        alignItems: 'center',
                        marginTop: 20,
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetSalary.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {salary ? salary : 'Salary bracket'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {salaryError && (
                    <Text style={styles.errorText}>{salaryError}</Text>
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
        </View>
      </CustomBackground>
    );
  }
}

const actions = {loginUser, completeProfile};
export default connect(null, actions)(CompleteDescriptionTwo);
