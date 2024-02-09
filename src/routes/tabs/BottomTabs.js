import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabbarComponent';
import Home from '../../screens/Main/Home';
import {HP, colors, platform} from '../../utils';


const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.gray},
        animation: 'simple_push',
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Feeds'}>
        <Tab.Screen name="tabBar4" component={Home} />
      {/* <Tab.Screen name="Feeds" component={Home} />
      <Tab.Screen name="Pyramid" component={Pyramid} />
      // <Tab.Screen name="tabBar4" component={Home} />
      <Tab.Screen name="Guardian" component={Guardian} />
      <Tab.Screen name="Community" component={Community} /> */}
    </Tab.Navigator>
  );
};
