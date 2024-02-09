import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Easing,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {getMusicNoteAnim, width, height} from '../utils/test';
import {size} from '../utils';
import {useNavigation} from '@react-navigation/native';

export default function VideoItem({data, isActive}) {
  const navigation = useNavigation();
  const [pause, setIsPause] = useState(false);
  const {uri, caption, channelName, musicName, likes, comments, avatarUri} =
    data;

  // console.log({data});

  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };
  const musicNoteAnimation1 = getMusicNoteAnim(musicNoteAnimatedValue1, false);
  const musicNoteAnimation2 = getMusicNoteAnim(musicNoteAnimatedValue2, true);

  const discAnimLoopRef = useRef();
  const musicAnimLoopRef = useRef();

  const triggerAnimation = useCallback(() => {
    discAnimLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
    discAnimLoopRef.current.start();
    musicAnimLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(musicNoteAnimatedValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );
    musicAnimLoopRef.current.start();
  }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2]);

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      discAnimLoopRef.current?.stop();
      musicAnimLoopRef.current?.stop();
      discAnimatedValue.setValue(0);
      musicNoteAnimatedValue1.setValue(0);
      musicNoteAnimatedValue2.setValue(0);
    }
  }, [
    isActive,
    triggerAnimation,
    discAnimatedValue,
    musicNoteAnimatedValue1,
    musicNoteAnimatedValue2,
  ]);

  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = StatusBar.currentHeight || 0;

  // console.log({bottomTabHeight});
  return (
    <View style={[styles.container, {height: height}]}>
      <StatusBar barStyle={'light-content'} />

      {/* <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={0.8}
        onPress={() => {
          setIsPause(!pause);
        }}> */}
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        paused={!isActive}
        repeat
        minLoadRetryCount={5}
      />
      {/* </TouchableOpacity> */}

      <View
        style={[
          styles.bottomSection,
          {
            bottom: bottomTabHeight + 30,
          },
        ]}>
        <View style={styles.bottomLeftSection}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.avatar} source={{uri: avatarUri}} />
            <Text style={styles.channelName}>{channelName}</Text>
          </View>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={require('../assets/image/music-note.png')}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>{musicName}</Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Animated.Image
            source={require('../assets/image/floating-music-note.png')}
            style={[styles.floatingMusicNote, musicNoteAnimation1]}
          />
          <Animated.Image
            source={require('../assets/image/floating-music-note.png')}
            style={[styles.floatingMusicNote, musicNoteAnimation2]}
          />
          <Animated.Image
            source={require('../assets/image/disc.png')}
            style={[styles.musicDisc, discAnimation]}
          />
        </View>
      </View>

      <View
        style={[
          styles.verticalBar,
          {
            bottom: bottomTabHeight + 80,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('OtherProfile');
          }}
          style={[styles.verticalBarItem, styles.avatarContainer]}>
          <Image style={styles.avatar} source={{uri: avatarUri}} />
          <View style={styles.followButton}>
            <Image
              source={require('../assets/image/plus-button.png')}
              style={styles.followIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require('../assets/image/heart.png')}
          />
          <Text style={styles.verticalBarText}>{likes}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require('../assets/image/message-circle.png')}
          />
          <Text style={styles.verticalBarText}>{comments}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require('../assets/image/reply.png')}
          />
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    position: 'absolute',

    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: 'white',
    fontSize: size.large,
    marginLeft: 10,
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
    fontSize: size.medium,
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  floatingMusicNote: {
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
});
