
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

const ReminderScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );

 <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Medication</Text>
            
             <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Medication1.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>

<View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Exercise</Text>
            
             <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Treadmill1.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>


