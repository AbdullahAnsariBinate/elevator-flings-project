import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
// import { colors } from '../../../utils';
import CustomModal from './CustomModal';
import { colors } from 'react-native-elements';
import { size } from 'lodash';
import { family } from '../utils';
import Img from './Img';
import { appIcons } from '../assets';
// import { appIcons } from '../../../assets';
// import Img from '../../../components/Img';
// import styles from './styles';

const AgreementModal = ({
    isVisible ,
    currentfocus,
    deleteName,
    reportName,
    onToggle = () => { },
    onCross = () => { },
    onSubmit = () => { },
    onReport = () => { },
}) => {
console.log('inside modal',isVisible)
    return (
        <CustomModal
            backdropColor={colors.black}
            visible={isVisible}
            togglePopup={onToggle}
            style={{
                width: '90%',
            }}>
            <View
                style={styles.viewStyle1}>
                    <Text>AGREEMENT</Text>

               
            </View>
        </CustomModal>
    );
};

export default AgreementModal;


const styles = StyleSheet.create({
    viewStyle1: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 10,height:250
    },
    viewStyle2: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        right: 2
    },
    tchStyle1: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    tchStyle2: {
        paddingBottom: 10,
        borderBottomWidth: 0.75,
        borderColor: colors.secondary
    },
    txtStyle1: {
        color: colors.secondary,
        fontSize: size.xxlarge,
        fontFamily: family.RedHatDisplay_ExtraBold,
        textAlign: 'center',
        marginTop: 20
    },
    txtStyle2: {
        color: colors.black,
        fontSize: size.medium,
        fontFamily: family.RedHatDisplay_Medium,
        textAlign: 'center',
        marginTop: 5,
        paddingHorizontal: 10
    },
    btnstyle: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: colors.secondary,
        marginTop: 25
    },
    txtbtn: {
        fontFamily: family.RedHatDisplay_Bold,
        fontSize: size.medium
    },
    imgbg1: {
        width: 150, height: 150, alignSelf: 'center'
    },
});

