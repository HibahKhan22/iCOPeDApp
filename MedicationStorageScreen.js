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
            <Text style={styles.cardTitle}>Medication Storage</Text>
            
           </View>
           
             <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Inventory</Text>
            
           </View>
           
            <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            
            <Text style={styles.cardDetails}>
            Name     Type      Dosage Time
            </Text>

            <Text>Pulmicort Flexhaler (Budesonide inhalation powder)</Text>
          </View>
