import React from 'react';
import Modal from 'react-native-modal';

export default function CustomModal(props) {
  return (
    <Modal
      style={props.style}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
      backdropColor={props?.backdropColor ? props?.backdropColor : '#000'}
      backdropOpacity={props?.backdropOpacity ? props?.backdropOpacity : 0.7}
      transparent={true}
      isVisible={props.visible}
      onBackButtonPress={props.togglePopup}
      onBackdropPress={props.togglePopup}>
      {props?.children}
    </Modal>
  );
}
