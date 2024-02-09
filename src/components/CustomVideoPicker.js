// npm i react-native-image-crop-picker react-native-actions-sheet react-native-actions-sheet; cd ios; pod install; cd ..

import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actions-sheet';
import {
  Image as ImageCompressor,
  Video as VideoCompressor,
} from 'react-native-compressor';
// import {
//   loaderStartWithDispatch,
//   loaderStopWithDispatch,
// } from '../redux/actions/appAction';
import Toast from 'react-native-toast-message';
export default CustomVideoPicker = ({
  children,
  onImageChange = () => {},
  style,
  isMultiple = false,
}) => {
  const actionSheetRef = useRef();

  const selectVideo = (method = 'gallery') => {
    if (method === 'camera') {
      ImageCropPicker.openCamera({
        mediaType: 'video',
        // multiple: isMultiple,
      }).then(async video => {
        actionSheetRef.current.hide();
        console.log({video});
        // let result;
        // const duration = video?.duration / 1000;
        // if (duration < 31) {
        //   loaderStartWithDispatch();
        //   setTimeout(() => {
        //     loaderStopWithDispatch();
        //   }, 850);
        //   result = await VideoCompressor.compress(video.path, {
        //     compressionMethod: 'auto',
        //   });

        //   onImageChange(result, video.mime, 'video');
        // } else {
        //   Toast.show({
        //     text1: 'Video duration can not be greater than 30 seconds',
        //     type: 'error',
        //     visibilityTime: 5000,
        //   });
        // }
      });
    } else {
      ImageCropPicker.openPicker({
        multiple: isMultiple,
        mediaType: 'video',
      }).then(async video => {
        actionSheetRef.current.hide();
        console.log({duration: video?.duration});
        let result;
        const duration = video?.duration / 1000;
        if (duration < 31) {
          //   loaderStartWithDispatch();
          //   setTimeout(() => {
          //     loaderStopWithDispatch();
          //   }, 850);
          result = await VideoCompressor.compress(video.path, {
            compressionMethod: 'auto',
          });
          onImageChange(result, video.mime, 'video');
        } else {
          Toast.show({
            text1: 'Video duration can not be greater than 30 seconds',
            type: 'error',
            visibilityTime: 5000,
          });
        }
      });
    }
  };
  return (
    <TouchableOpacity
      onPress={() => actionSheetRef.current.show()}
      style={style}
      activeOpacity={0.8}>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{backgroundColor: 'transparent'}}>
        <View style={{padding: 10}}>
          <View
            style={{
              backgroundColor: 'rgba(241,241,241,0.8)',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
              }}>
              <Text style={{color: 'grey', textAlign: 'center'}}>
                Choose an option to pick an Video
              </Text>
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                // ref.hide()
                imageChange('camera');
              }}
              style={{
                paddingVertical: 12,
                alignItems: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                Take Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // ref.hide()
                imageChange('gallery');
              }}
              style={{paddingVertical: 12, alignItems: 'center'}}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                Choose Photo from Library
              </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                selectVideo('camera');
              }}
              style={{
                paddingVertical: 12,
                alignItems: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                Take Video
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                selectVideo('gallery');
              }}
              style={{paddingVertical: 12, alignItems: 'center'}}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                Choose Video from Library
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => actionSheetRef.current.hide()}
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              paddingVertical: 12,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'rgb(0,88,200)',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      {children}
    </TouchableOpacity>
  );
};
