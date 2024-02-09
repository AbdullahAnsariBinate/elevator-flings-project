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
const {width} = Dimensions.get('screen');
class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImagePath: null,
      ImageMime: null,
      MultileImages: [],
      fullname: '',
      dateOfBirth: '',
      gender: '',
      bio: '',
      focusedInput: null,
    };
    this.actionSheetGender = createRef();
  }

  // onSubmit = () => {
  //   const {name, phoneNumber, address, zipCode, countryState} = this.state;
  //   if (!name && !phoneNumber && !address && !zipCode && !countryState) {
  //     Toast.show({
  //       text1: 'Please enter a feilds',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (name == '') {
  //     Toast.show({
  //       text1: 'Please enter Name',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (phoneNumber == '') {
  //     Toast.show({
  //       text1: 'Please enter Phone Number',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (address == '') {
  //     Toast.show({
  //       text1: 'Please enter Address',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (zipCode == '') {
  //     Toast.show({
  //       text1: 'Please enter Zip Code',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (countryState == '') {
  //     Toast.show({
  //       text1: 'Please enter Country State',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else {
  //     let payload = {
  //       role: 'user',
  //       email: 'abc@gmail.com',
  //       password: '123456',
  //     };
  //     Toast.show({
  //       text1: 'Sign up successful',
  //       type: 'success',
  //       visibilityTime: 3000,
  //     });
  //     this.props.loginUser(payload);
  //   }
  // };

  continue = values => {
    console.log('Form submitted with values ss:', values);
    if (!this.state.gender) {
      this.setState({error: 'please select gender'});
    } else {
      this.setState({error: ''});
      NavService.navigate('CompleteDescription', {
        ImagePath:this.state.ImagePath,
        ImageMime:this.state.ImageMime,
        MultileImages: this.state.MultileImages,
        fullname: values.fullname,
        dateOfBirth: values.dateOfBirth,
        bio: values.bio,
        gender:values.gender
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
    const {ImagePath, gender, MultileImages, focusedInput} = this.state;
    const validationSchema = Yup.object().shape({
      fullname: Yup.string().required('Fullname is required'),
      dateOfBirth: Yup.date()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth cannot be in the future'),
      bio: Yup.string().required('Bio is required'),
    });
    const updateProfile = (path, mime) => {
      this.setState({ImagePath: path});
      this.setState({ImageMime: mime});
    };
    const selectMultipleImage = (paths, mime) => {
      const {MultileImages} = this.state;
      if (MultileImages.length + paths.length <= 10) {
        const newImages = paths.map(pathItem => ({
          path: pathItem.path,
          name: `image${Date.now()}.${mime.slice(mime.lastIndexOf('/') + 1)}`,
          mime: mime,
        }));

        this.setState({
          MultileImages: [...MultileImages, ...newImages],
        });
      } else {
        Toast.show({
          text1: 'You can select a maximum of 10 images.',
          type: 'error',
          visibilityTime: 3000,
        });
      }
    };
    const genderArray = [' Male', 'Female', 'other'];
    return (
      <CustomBackground
        showLogo={false}
        titleText={'Set Profile'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <ActionSheetComponent
            ref={this.actionSheetGender}
            title="Select Gender"
            dataset={genderArray}
            onPress={item => {
              this.setState({gender: item});
            }}
          />
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={styles.profileCircle}>
              <Img
                resizeMode={'cover'}
                style={styles.profile}
                local={ImagePath !== null ? false : true}
                src={
                  ImagePath !== null ? `${ImagePath}` : appIcons.userPlaceholder
                }
              />
            </View>
            <ImagePicker
              style={styles.editCircle}
              onImageChange={(path, mime) => {
                updateProfile(path, mime);
              }}>
              <Img
                resizeMode={'contain'}
                local={true}
                src={appIcons.plus}
                style={styles.edit}
              />
            </ImagePicker>
          </View>

          <Text style={styles.title}>Upload Pictures</Text>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <ImagePicker
              style={styles.box}
              isMultiple={true}
              onImageChange={(path, mime) => {
                selectMultipleImage(path, mime);
              }}>
              <Img src={appIcons.upload} local={true} style={styles.icon} />
              <Text style={styles.text}>
                Maximum 10, minimum 3, 1 full body picture suggested
              </Text>
            </ImagePicker>

            {MultileImages.length > 0 && (
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flex: 1}}
                contentContainerStyle={{flexGrow: 0, marginVertical: 10}}
                data={MultileImages}
                renderItem={({item, index}) => {
                  return (
                    <View style={{position: 'relative', marginRight: 10}}>
                      <Img
                        local={false}
                        src={item?.path}
                        style={styles.Image}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          const updatedImages = [...MultileImages];
                          updatedImages.splice(index, 1);
                          this.setState({MultileImages: updatedImages});
                        }}
                        style={styles.cross}>
                        <Img
                          local
                          src={appIcons.cross}
                          style={{width: 15, height: 15}}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            )}
            <Formik
              validationSchema={validationSchema}
              initialValues={{fullname: '', dateOfBirth: '', bio: ''}}
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
                    placeholder="Full-name"
                    onChangeText={handleChange('fullname')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('fullname');
                    }}
                    onFocus={() => this.handleFocus('fullname')}
                    value={values.fullname}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'fullname' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.fullname && errors.fullname && (
                    <Text style={styles.errorText}>{errors.fullname}</Text>
                  )}
                  {console.log(errors, '=errors')}
                  <CustomTextInput
                    placeholder="DOB"
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('dateOfBirth');
                    }}
                    onFocus={() => this.handleFocus('dateOfBirth')}
                    value={values.dateOfBirth}
                    keyboardType="number-pad"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'dateOfBirth' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.dateOfBirth && errors.dateOfBirth && (
                    <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
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
                    onPress={() => this.actionSheetGender.current.show()}>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: size.small,
                        fontFamily: family.Jost_Regular,
                      }}>
                      {gender ? gender : 'Gender'}
                    </Text>
                    <Img
                      resizeMode={'contain'}
                      local={true}
                      src={appIcons.dropdown}
                      style={{width: 10, height: 20}}
                    />
                  </TouchableOpacity>

                  <CustomTextInput
                    placeholder="bio"
                    onChangeText={handleChange('bio')}
                    onBlur={() => {
                      this.handleBlur();
                      handleBlur('bio');
                    }}
                    onFocus={() => this.handleFocus('bio')}
                    value={values.bio}
                    keyboardType="default"
                    placeholderColor={colors.white}
                    containerStyle={[
                      styles.textInput,
                      focusedInput === 'bio' && {
                        borderColor: colors.primary,
                      },
                    ]}
                  />
                  {touched.bio && errors.bio && (
                    <Text style={styles.errorText}>{errors.bio}</Text>
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
export default connect(null, actions)(CompleteProfile);
