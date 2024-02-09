import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import NavService from '../helpers/NavService';
import {colors, family, size} from '../utils';
import {appIcons, appImages} from '../assets';

const {width} = Dimensions.get('screen');
export default class TabBar extends React.Component {
  state = {
    isVisible: false,
    keyboardStatus: false,
  };

  componentDidMount() {
    this.showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({keyboardStatus: true});
    });
    this.hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({keyboardStatus: false});
    });
  }
  render() {
    const {isVisible, keyboardStatus} = this.state;
    const {state, navigation} = this.props;
    const togglePopUp = () => {
      this.setState({isVisible: !isVisible});
    };
    const navigateFromPopUp = nav => {
      togglePopUp();
      NavService.navigate(nav);
    };

    return (
      <View
        style={[
          {
            width: width,
            height: width * 0.2,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'flex-end',
            backgroundColor: colors.primary,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
          },
          keyboardStatus ? styles.hideTabNavigation : null,
        ]}>
        {/* <Modal
          isVisible={isVisible}
          onBackButtonPress={togglePopUp}
          onBackdropPress={togglePopUp}
          backdropOpacity={0.6}>
          <View style={styles.mainContainer}>
            <View style={styles.buttonWrapper}>
              <CustomButton
                title="CREATE POST"
                onPress={() => navigateFromPopUp('CreatePost')}
                buttonStyle={styles.buttonStyle}
                textStyle={{fontSize: 16}}
              />
              <CustomButton
                title="SCAN A SHOE"
                onPress={() => navigateFromPopUp('ScanQR')}
                buttonStyle={[styles.buttonStyle, styles.buttonPerfectionNext]}
                textStyle={{fontSize: 16}}
              />
            </View>
          </View>
        </Modal> */}
        <View
          style={{
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'space-around',
          }}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              if (route.name === 'Feeds')
                navigation.navigate('BottomTabs', {screen: 'Feeds'});
              if (route.name === 'Pyramid')
                navigation.navigate('Pyramid', {screen: 'Pyramid'});
              if (route.name === 'Guardian')
                navigation.navigate('Guardian', {screen: 'Guardian'});
              if (route.name === 'Community')
                navigation.navigate('Community', {
                  screen: 'Community',
                });
            };

            let imageSrc = appIcons.homeUnSelected;
            if (route.name === 'Feeds') imageSrc = appIcons.feeds;
            if (route.name === 'Pyramid') imageSrc = appIcons.pyramid;
            if (route.name === 'Guardian') imageSrc = appIcons.guardian;
            if (route.name === 'Community') imageSrc = appIcons.community;

            if (route.name === 'tabBar4') {
              return <View key={index + 1} style={styles.tabs} />;
            }
            return (
              // <TouchableOpacity
              //   key={index + 1}
              //   accessibilityState={isFocused ? {selected: true} : {}}
              //   accessibilityRole="button"
              //   activeOpacity={0.8}
              //   onPress={onPress}
              //   style={styles.tabs}>
              //   <Image
              //     source={imageSrc}
              //     style={{
              //       height: 30,
              //       width: 30,
              //       tintColor: isFocused ? colors.primary : colors.gray,
              //     }}
              //     resizeMode="contain"
              //   />
              // </TouchableOpacity>
              <TouchableOpacity
                key={index + 1}
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityRole="button"
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.tabs}>
                {/* {isFocused && (
                  <Image
                    source={appIcons.dot}
                    style={{
                      height: 5,
                      width: 5,
                      tintColor: isFocused ? colors.white : colors.white,
                      alignSelf: 'center',
                      bottom: 8
                    }}
                    resizeMode="contain"
                  />
                )} */}
                <Image
                  source={imageSrc}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: isFocused ? colors.white : colors.grey,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: isFocused ? colors.white : colors.black,
                    fontFamily: family.Jost_Medium,
                    fontSize: size.small,
                  }}>
                  {route?.name === 'Messages' ? 'Chat' : route?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            this.props.navigation.navigate('CreatePost', {
              from: 'main',
            })
          }
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            // left:keyboardStatus&&-20,
            elevation: 9,
          }}>
          <Image
            source={appIcons.post}
            style={{
              height: 80,
              width: 80,
              // tintColor: colors.white,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: colors.white,
              fontFamily: family.Jost_Medium,
              fontSize: size.small,
            }}>
            Create Post
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: width * 0.4,
    borderRadius: 10,
  },
  buttonPerfectionNext: {
    backgroundColor: colors.secondary,
    marginLeft: 15,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 65,
  },

  hideTabNavigation: {
    width: 0,
    height: 0,
    position: 'absolute',
    bottom: -1000,
  },
});
