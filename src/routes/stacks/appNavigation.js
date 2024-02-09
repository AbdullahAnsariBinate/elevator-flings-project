// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserAppStack from '../drawer/appDrawer';


const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />

    </Stack.Navigator>
  );
};

export default AppNavigation;
