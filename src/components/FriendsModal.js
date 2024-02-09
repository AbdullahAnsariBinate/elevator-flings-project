import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import CustomModal from './CustomModal';
import {family, size, colors} from '../utils';
import Img from './Img';
import {appIcons, appImages} from '../assets';
import CustomButton from './CustomButton';

const {width} = Dimensions.get('screen');
const FriendsModal = ({
  isVisible,
  currentfocus,
  friends,
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
}) => {
  console.log({currentfocus});
  console.log({friends});

  return (
    <CustomModal
      backdropColor={colors.black}
      visible={isVisible}
      togglePopup={onToggle}
      style={{
        width: '90%',
        alignSelf: 'center',
      }}>
      <View style={styles.viewStyle1}>
        <TouchableOpacity onPress={onCross}>
          <Img
            local
            src={appIcons.x}
            style={styles.cross}
            tintColor={colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Friends List</Text>
        <FlatList
          data={friends}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
          }}
          renderItem={({item, index}) => {
            return (
              <View style={styles.innerContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={appImages.user}
                      style={{width: 50, height: 50, overflow: 'hidden'}}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={styles.name}>{item?.name}</Text>
                </View>
                <View>
                  <CustomButton
                    title="Add"
                    onPress={() => {
                      onSubmit(item);
                    }}
                    buttonStyle={{
                      width: '75%',
                      alignSelf: 'flex-end',
                      marginRight: 4,
                      height: 50,
                    }}
                    textStyle={{fontSize: 18}}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </CustomModal>
  );
};

export default FriendsModal;

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 25,
    height: 500,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  innerContainer: {
    backgroundColor: colors.white,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cross: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 0,
    bottom: -5,
  },
  name: {
    color: colors.black,
    fontFamily: family.Jost_SemiBold,
    fontSize: 17,
    marginLeft: 8,
  },

  heading: {
    color: colors.primary,
    fontSize: 22,
    fontFamily: family.Jost_SemiBold,
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 25,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
});
