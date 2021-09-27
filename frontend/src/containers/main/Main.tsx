import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Adoption from './screens/adoption';
import Blog from './screens/Blog';
import Donation from './screens/Donation';
import Location from './screens/location';
import Zone from './screens/location/Zone';

const LocationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Main = ({ navigation }: any) => (
  <Tab.Navigator activeColor="#34e5ff" barStyle={{ backgroundColor: '#ffffff' }} labeled={false}>
    {/* <Tab.Screen
      name="Adoption"
      component={Adoption}
      options={{
        tabBarLabel: 'Adoption',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
      }}
    /> */}
    <Tab.Screen
      name="AdoptionTab"
      // eslint-disable-next-line react/no-children-prop
      children={() => <Adoption navigation={navigation} />}
      options={{
        tabBarLabel: 'Adoption',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="LocationTab"
      // eslint-disable-next-line react/no-children-prop
      children={() => (
        <LocationStack.Navigator initialRouteName="SignIn">
          <LocationStack.Screen
            name="Location"
            component={Location}
            options={{ headerShown: false }}
          />
          <LocationStack.Screen name="Zone" component={Zone} options={{ headerShown: false }} />
        </LocationStack.Navigator>
      )}
      options={{
        tabBarLabel: 'Location',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map-marker" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Blog"
      component={Blog}
      options={{
        tabBarLabel: 'Blog',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="alert-circle" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Donation"
      component={Donation}
      options={{
        tabBarLabel: 'Donation',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="gift" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default Main;
