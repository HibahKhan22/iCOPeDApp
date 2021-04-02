import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
  
   <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Medication</Text>
  

            <Text style={styles.cardDetailsLink}
              onPress={() => navigation.navigate('MedicationReminderScreen')}>
             Read more
            </Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/AidKit.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            
            
             <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Exercise</Text>
           

            <Text style={styles.cardDetailsLink}
              onPress={() => navigation.navigate('ExerciseReminderScreen')}>
             Read more
            </Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Exercise2.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            
             <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Diet</Text>

            <Text style={styles.cardDetailsLink}
              onPress={() => navigation.navigate('DietScreen2')}>
             Read more
            </Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Cooking.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
