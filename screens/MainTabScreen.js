import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './DashboardScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReportsScreen from './ReportsScreen';
import AccountScreen from './AccountScreen';
import SettingsScreen from './SettingsScreen';
import MoreScreen from './MoreScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

//Various header styling and text from 19-88

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

//Chat section of interphase and its elements from 91-124

const MainTabScreen = () => (

<Tab.Navigator
initialRouteName="Home"
activeColor="#43BFC7"
barStyle={{ backgroundColor: 'white' }}
>
<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name='view-dashboard' color={color} size={24} />
    ),
  }}
/>
<Tab.Screen
  name="Reports"
  component={ReportsScreen}
  options={{
    tabBarLabel: 'Reports',
    tabBarIcon: ({ color }) => (
      <Ionicons name="document" color={color} size={24} />
    ),
  }}
/>
<Tab.Screen
  name="Account"
  component={AccountScreen}
  options={{
    tabBarLabel: 'Account',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account" color={color} size={24} />
    ),
  }}
/>
<Tab.Screen
  name="Settings"
  component={SettingsScreen}
  options={{
    tabBarLabel: 'Settings',
    tabBarIcon: ({ color }) => (
      <Fontisto name="player-settings" color={color} size={24} />
    ),
  }}
/>
<Tab.Screen
  name="More"
  component={MoreScreen}
  options={{
    tabBarLabel: 'More',
    tabBarIcon: ({ color }) => (
      <AntDesign name="pluscircle" color={color} size={24} />
    ),
  }}
/>
</Tab.Navigator>
);]

// Various tabs in itnerphase and their components and options included in them from 134-190

export default MainTabScreen;
