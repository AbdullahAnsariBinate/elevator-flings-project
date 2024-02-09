import React, {Component, createRef, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import ImagePicker from '../../../components/ImagePicker';
import {appIcons} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import Img from '../../../components/Img';
import {colors, family, size} from '../../../utils';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import {create} from 'react-test-renderer';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import NavService from '../../../helpers/NavService';
import {height} from '../../../utils/test';
const {width} = Dimensions.get('screen');
class CompleteDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      lookingFor: '',
      allTags: [],
      signleTag: '',
      lookingForerror: '',
      allTagserror: '',
      education: '',
      educationErrors: '',
      intention: '',
      intentionError: '',
    };
    this.actionSheetLookingFor = createRef();
    this.actionSheetEducation = createRef();
    this.actionSheetIntention = createRef();
  }

  continue = values => {
    const {
      ImagePath,
      ImageMime,
      MultileImages,
      fullname,
      dateOfBirth,
      bio,
      gender,
    } = this?.props?.route?.params;
    const {lookingFor, allTags, education, intention, intentionError} =
      this.state;
      if (!intention) {
        this.setState({intentionError: 'please select intention'});
      } 
    if (!lookingFor) {
      this.setState({lookingForerror: 'please select looking for'});
    } else if (allTags?.length == 0) {
      this.setState({allTagserror: 'Interest field is required'});
    } else if (!education) {
      this.setState({educationErrors: 'please select education for'});
    } else {
      this.setState({
        lookingForerror: '',
        allTagserror: '',
        educationErrors: '',
      });
      NavService.navigate('CompleteDescriptionTwo', {
        ImagePath,
        ImageMime,
        MultileImages,
        fullname,
        dateOfBirth,
        bio,
        gender,
        lookingFor: lookingFor,
        allTags: allTags,
        education: education,
        intention:intention,
        career: values.career,
        weight: values.weight,
        height: values.height,
        networth: values.networth,
      });
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
      lookingFor,
      allTags,
      lookingForerror,
      allTagserror,
      educationErrors,
      education,
      intention,
      intentionError,
    } = this.state;
    const lookingForArray = ['option A', 'Option B', 'Option C'];
    const EducationArray = ['Education A', 'Education B', 'Education C'];
    const intentionArray = ['option A', 'Option B', 'Option C'];
    const validationSchema = Yup.object().shape({
      career: Yup.string().required('Career is required'),
      weight: Yup.string().required('Weight is required'),
      height: Yup.string().required('Height is required'),
      networth: Yup.string().required('Networth is required'),
    });
    return (
      <CustomBackground
        showLogo={false}
        titleText={'Descriptions'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
        <ActionSheetComponent
            ref={this.actionSheetIntention}
            title="Select Looking For"
            dataset={intentionArray}
            onPress={item => {
              this.setState({intention: item});
            }}
          />
          <ActionSheetComponent
            ref={this.actionSheetLookingFor}
            title="Select Looking For"
            dataset={lookingForArray}
            onPress={item => {
              this.setState({lookingFor: item});
            }}
          />
          <ActionSheetComponent
            ref={this.actionSheetEducation}
            title="Select Education"
            dataset={EducationArray}
            onPress={item => {
              this.setState({education: item});
            }}
          />
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                career: '',
                weight: '',
                height: '',
                networth: '',
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
                    onPress={() => this.actionSheetIntention.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {intention ? intention : 'Intention'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {intentionError && intentionError && (
                    <Text style={styles.errorText}>{intentionError}</Text>
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
                    onPress={() => this.actionSheetLookingFor.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {lookingFor ? lookingFor : 'Looking For'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {lookingForerror && lookingForerror && (
                    <Text style={styles.errorText}>{lookingForerror}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Interest"
                    onChangeText={handleChange('tags')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('tags');
                    }}
                    editable={allTags?.length === 5 ? false :true}
                    onFocus={() => this.handleFocus('tags')}
                    value={values?.tags}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'tags' && {
                        borderColor: colors.primary,
                      },
                      {marginBottom: 20},
                    ]}
                    returnKeyLabel={'Next'}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      const {tags} = values;
                      if (tags.trim()) {
                        this.setState(prevState => ({
                          allTags: [...prevState.allTags, tags.trim()],
                        }));
                        handleChange('tags')('');
                      }
                    }}
                  />
                  {allTagserror && allTagserror && (
                    <Text style={styles.errorText}>{allTagserror}</Text>
                  )}

                  {allTags.length > 0 && (
                    <View style={{height: 60, width: width * 0.9}}>
                      <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={allTags}
                        contentContainerStyle={{gap: 5}}
                        renderItem={({item, index}) => {
                          return (
                            <View style={styles.tagsContainer}>
                              <Text
                                style={{
                                  color: colors.white,
                                  fontSize: size.medium,
                                  fontWeight: '600',
                                }}>
                                {item}
                              </Text>
                              <TouchableOpacity
                                onPress={() => {
                                  const updatedtags = [...allTags];
                                  updatedtags.splice(index, 1);
                                  this.setState({allTags: updatedtags});
                                }}
                                style={styles.cross}>
                                <Img
                                  local
                                  src={appIcons.cross}
                                  style={{width: 20, height: 20}}
                                />
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
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
                      },
                      styles.textInput,
                    ]}
                    onPress={() => this.actionSheetEducation.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {education ? education : 'Education'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>
                  {educationErrors && educationErrors && (
                    <Text style={styles.errorText}>{educationErrors}</Text>
                  )}
                  <CustomTextInput
                    placeholder="Career"
                    onChangeText={handleChange('career')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('career');
                    }}
                    onFocus={() => this.handleFocus('career')}
                    value={values?.career}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'career' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.career && errors.career && (
                    <Text style={styles.errorText}>{errors.career}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Weight"
                    onChangeText={handleChange('weight')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('weight');
                    }}
                    onFocus={() => this.handleFocus('weight')}
                    value={values?.weight}
                    keyboardType="number-pad"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'weight' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.weight && errors.weight && (
                    <Text style={styles.errorText}>{errors.weight}</Text>
                  )}

                  <CustomTextInput
                    placeholder="height"
                    onChangeText={handleChange('height')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('height');
                    }}
                    onFocus={() => this.handleFocus('height')}
                    value={values?.height}
                    keyboardType="number-pad"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'height' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.height && errors.height && (
                    <Text style={styles.errorText}>{errors.height}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Networth"
                    onChangeText={handleChange('networth')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('networth');
                    }}
                    onFocus={() => this.handleFocus('networth')}
                    value={values?.networth}
                    keyboardType="number-pad"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'networth' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.networth && errors.networth && (
                    <Text style={styles.errorText}>{errors.networth}</Text>
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

const actions = {loginUser};
export default connect(null, actions)(CompleteDescription);
