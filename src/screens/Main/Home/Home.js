import React, {Component, useState} from 'react';

import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AppBackground from '../../../components/AppBackground';
import NavService from '../../../helpers/NavService';
import {videoData} from '../../../utils/dummyData';
import Card from '../../../components/Card';
import CustomBackground from '../../../components/CustomBackground';
import {VideoScroll, Content} from 'react-native-video-scroll';
import VideoItem from '../../../components/VideoItem';
import {height} from '../../../utils/test';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {colors} from 'react-native-elements';
import styles from './styles';
import Img from '../../../components/Img';
import {appIcons} from '../../../assets';

// export class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeVideoIndex: 0,
//     };
//   }

//   render() {
//     const {activeVideoIndex} = this.state;

//     return (
//       <>
//         <FlatList
//           data={videoData}
//           pagingEnabled
//           renderItem={({item, index}) => (
//             <VideoItem data={item} isActive={activeVideoIndex === index} />
//           )}
//           onScroll={e => {
//             const index = Math.round(
//               e.nativeEvent.contentOffset.y / (height - 10),
//             );
//             this.setState({
//               activeVideoIndex: index,
//             });
//             // setActiveVideoIndex(index);
//           }}
//         />
//       </>
//     );
//   }
// }

// export default Home;

const Home = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeState, setActiveState] = useState({
    locked: true,
    unlocked: false,
  });
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setActiveState({
              unlocked: false,
              locked: true,
            });
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.topText,
                {
                  color: activeState.locked ? 'white' : 'grey',
                },
              ]}>
              Locked Videos
            </Text>
            <Img
              local
              src={appIcons.locked}
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.centerLine} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setActiveState({
              locked: false,
              unlocked: true,
            });
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.topText,
                {
                  color: activeState.unlocked ? 'white' : 'grey',
                },
              ]}>
              Unlocked Videos
            </Text>
            <Img
              local
              src={appIcons.unlocked}
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={videoData}
        pagingEnabled
        renderItem={({item, index}) => {
          // console.log({activeVideoIndex, index});

          return (
            <VideoItem data={item} isActive={activeVideoIndex === index} />
          );
        }}
        onScroll={e => {
          const {contentOffset} = e.nativeEvent;
          const index = Math.floor(contentOffset.y / (height - tabBarHeight));
          setActiveVideoIndex(index);
        }}
      />
    </View>
  );
};

export default Home;
