import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons} from '../assets/index';
import {appImages} from '../assets';
import {colors} from '../utils';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import ProfileImage from './ProfileImage';

function AppBackground({
  children,
  title,
  back = false,
  menu = false,
  nav = '',
  edit = false,
  profile = false,
  rightIcon = appIcons.bell,
  marginHorizontal = true,
  group = false,
  onEdit = () => {},
  childrenContainerStyle = {},
  rightIconNav = () => {
    NavService.navigate('Notification');
  },
  prfileIconNav = () => {
    NavService.navigate('MyProfile');
  },

  notification = false,
  style,
}) {
  return (
    <ImageBackground
      source={appImages.backgroundImage}
      resizeMode="cover"
      style={[{flex: 1}, style]}>
      <StatusBar translucent barStyle={'light-content'} />
      <View
        style={{
          marginTop: getStatusBarHeight() * 1.4,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              nav.length
                ? NavService.navigate(nav)
                : back
                ? NavService.goBack()
                : NavService.openDrawer();
            }}
            style={{
              position: 'absolute',
              alignItems: 'center',
              // backgroundColor: menu ? colors.primary : 'transparent',
              borderRadius: menu ? 10 : 0,
              left: 20,
              width: 45,
              height: 45,
              justifyContent: 'center',
              // ...Shadows.shadow3,
            }}>
            {back && (
              <Image
                source={appIcons.back}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            )}
            {menu && (
              <Image
                source={appIcons.new_menu}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            )}
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: colors.white,
                fontWeight: '700',
                fontSize: 22,
              }}>
              {title}
            </Text>
          </View>

          {notification && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Notification');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: colors.primary,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: 12,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                group ? onEdit : NavService.navigate('EditProfile');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: colors.primary,
              }}>
              <Image
                source={appIcons.EditProfile}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            </TouchableOpacity>
          )}
          {profile && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                prfileIconNav();
              }}
              style={{
                position: 'absolute',
                right: 90,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={appIcons.userPlaceholder}
                style={[
                  {
                    width: 35,
                    height: 35,
                    resizeMode: 'cover',
                    borderRadius: 70,
                  },
                ]}
              />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </ImageBackground>
  );
}

export default AppBackground;
