import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home1 from '../screens/Home1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Country from '../screens/Country';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home1}
        // options={{tabBarVisible:}}
      />
      {/* <Stack.Screen name="Home2" component={Home2} /> */}
      <Tab.Screen name="Country" component={Country} />
    </Tab.Navigator>
  );
};

const HomeNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Feed"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: 'Covid-19',
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen name="Account" component={Logout} />
    </Drawer.Navigator>
  );
};

export default HomeNav;
