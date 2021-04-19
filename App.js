/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterScreen from './screens/EnterScreen';
import LoginScreen from './screens/LoginScreen';
import WeatherScreen from './screens/WeatherScreen';
import MainTabScreen from './screens/MainTabScreen';
import PollutionScreen from './screens/PollutionScreen';
import DietScreen from './screens/DietScreen';
import RemindersScreen from './screens/RemindersScreen';
import MedicationReminderScreen from './screens/MedicationReminderScreen';
import ExerciseReminderScreen from './screens/ExerciseReminderScreen';
import DietReminderScreen from './screens/DietReminderScreen';
import DoctorScreen from './screens/DoctorScreen';
import CoachScreen from './screens/CoachScreen';
import CoachDetailScreen from './screens/CoachDetailScreen';
import NewsScreen from './screens/NewsScreen';
import RiskCalculatorScreen from './screens/RiskCalculatorScreen';
import hi from './screens/hi';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName={EnterScreen}>
          <AppStack.Screen name="EnterScreen" component={EnterScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="Weather" component={WeatherScreen} />
          <AppStack.Screen name="MainTabScreen" component={MainTabScreen} />
          <AppStack.Screen name="WeatherScreen" component = {WeatherScreen} />
          <AppStack.Screen name="PollutionScreen" component = {PollutionScreen} />
          <AppStack.Screen name="DietScreen" component = {DietScreen} />
          <AppStack.Screen name="RemindersScreen" component = {RemindersScreen} />
          <AppStack.Screen name="MedicationReminderScreen" component={MedicationReminderScreen}/>
          <AppStack.Screen name ="ExerciseReminderScreen" component={ExerciseReminderScreen}/>
          <AppStack.Screen name = "DietReminderScreen" component = {DietReminderScreen}/>
          <AppStack.Screen name = "DoctorScreen" component = {DoctorScreen}/>
          <AppStack.Screen name="CoachScreen" component ={CoachScreen}/>
          <AppStack.Screen name = "CoachDetailScreen" component = {CoachDetailScreen}/>
          <AppStack.Screen name = "NewsScreen" component = {NewsScreen}/>
          <AppStack.Screen name = "RiskCalculatorScreen" component = {RiskCalculatorScreen}/>
          <AppStack.Screen name = "hi" component = {hi} />
       </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default App;